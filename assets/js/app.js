/* Poticaj 2026 - app logic
 * Tema, jezik (HR/EN), brojilo do otvaranja prijava, kalkulator poticaja,
 * trajni pre-check checklist i sitnice (nav, scroll-spy, kopiranje).
 * Nema ovisnosti. Sve je vani zbog CSP-a (default-src 'self').
 */
(function () {
  'use strict';

  var STORE = {
    theme: 'poticaj.theme',
    lang: 'poticaj.lang',
    checks: 'poticaj.checks'
  };

  var OPEN_AT = '2026-11-05T09:00:00+01:00'; // 09:00 po lokalnom vremenu (CET)
  var DICT = window.I18N || { hr: {}, en: {} };

  var lang = 'hr';

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      if (value === null) window.localStorage.removeItem(key);
      else window.localStorage.setItem(key, value);
    } catch (e) { /* privatni način rada - ignoriraj */ }
    return null;
  }

  function t(key) {
    var d = DICT[lang] || {};
    if (d[key] != null) return d[key];
    if (DICT.en && DICT.en[key] != null) return DICT.en[key];
    return key;
  }

  function parsePrice(value) {
    var digits = String(value == null ? '' : value).replace(/[^\d]/g, '');
    if (!digits) return NaN;
    return parseInt(digits, 10);
  }

  function eur(n) {
    var loc = lang === 'hr' ? 'hr-HR' : 'en-GB';
    try {
      return new Intl.NumberFormat(loc, { maximumFractionDigits: 0 }).format(n) + ' €';
    } catch (e) {
      return Math.round(n) + ' €';
    }
  }

  function num(n) {
    var loc = lang === 'hr' ? 'hr-HR' : 'en-GB';
    try {
      return new Intl.NumberFormat(loc, { maximumFractionDigits: 0 }).format(n);
    } catch (e) {
      return String(Math.round(n));
    }
  }

  /* ---------- theme ---------- */
  function initTheme() {
    var saved = store(STORE.theme);
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
    var btn = $('.theme-toggle');
    if (!btn) return;
    syncThemeButton(btn);
    btn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
        (!document.documentElement.hasAttribute('data-theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      store(STORE.theme, next);
      syncThemeButton(btn);
    });
  }

  function syncThemeButton(btn) {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
      (!document.documentElement.hasAttribute('data-theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  /* ---------- language ---------- */
  function initLang() {
    var fromUrl = new URLSearchParams(window.location.search).get('lang');
    var saved = fromUrl || store(STORE.lang);
    lang = saved === 'en' ? 'en' : 'hr';

    applyLang(lang);

    var btn = $('.lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        lang = lang === 'hr' ? 'en' : 'hr';
        store(STORE.lang, lang);
        applyLang(lang);
        renderCountdown();
        renderCalc();
      });
    }
  }

  function applyLang(next) {
    var dict = DICT[next] || {};
    document.documentElement.lang = next;

    $$('[data-i18n]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-hr')) {
        el.setAttribute('data-i18n-hr', el.innerHTML);
      }
      var key = el.getAttribute('data-i18n');
      if (next === 'en' && dict[key] != null) {
        el.innerHTML = dict[key];
      } else {
        el.innerHTML = el.getAttribute('data-i18n-hr');
      }
    });

    var toggle = $('.lang-toggle');
    if (toggle) {
      var cur = $('.lang-current', toggle);
      var alt = $('.lang-alt', toggle);
      if (cur) cur.textContent = next.toUpperCase();
      if (alt) alt.textContent = next === 'hr' ? 'EN' : 'HR';
      toggle.setAttribute('aria-label', next === 'hr' ? 'Switch to English' : 'Prebaci na hrvatski');
      toggle.setAttribute('title', next === 'hr' ? 'Switch to English' : 'Prebaci na hrvatski');
    }
  }

  /* ---------- countdown ---------- */
  function initCountdown() {
    renderCountdown();
    window.setInterval(renderCountdown, 1000);
  }

  function renderCountdown() {
    var target = Date.parse(OPEN_AT);
    var diff = target - Date.now();
    var els = {
      d: $('[data-cd="d"]'),
      h: $('[data-cd="h"]'),
      m: $('[data-cd="m"]'),
      s: $('[data-cd="s"]')
    };
    var status = $('#cd-status');

    if (diff <= 0) {
      if (els.d) els.d.textContent = '0';
      if (els.h) els.h.textContent = '0';
      if (els.m) els.m.textContent = '0';
      if (els.s) els.s.textContent = '0';
      if (status) status.textContent = t('dyn.open');
      return;
    }

    var sec = Math.floor(diff / 1000);
    var d = Math.floor(sec / 86400);
    var h = Math.floor((sec % 86400) / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var s = sec % 60;
    var pad = function (n) { return n < 10 ? '0' + n : String(n); };

    if (els.d) els.d.textContent = String(d);
    if (els.h) els.h.textContent = pad(h);
    if (els.m) els.m.textContent = pad(m);
    if (els.s) els.s.textContent = pad(s);
    if (status) status.textContent = t('dyn.before');
  }

  /* ---------- calculator ---------- */
  var calc = {
    price: $('#price'),
    grant: $('#grant'),
    own: $('#own'),
    pct: $('#pct'),
    note: $('#calc-note'),
    form: $('#calc-form')
  };

  function grantFor(price, cat) {
    if (!isFinite(price) || price <= 0) return null;

    if (cat === 'L') {
      if (price > 35000) return { amount: 0, cap: 'off', noteKey: 'dyn.note.l.off' };
      var lAmount = Math.min(2500, price * 0.4);
      return {
        amount: lAmount,
        noteKey: price * 0.4 <= 2500 ? 'dyn.note.l.low' : 'dyn.note.l.cap'
      };
    }

    if (price > 62500) return { amount: 0, cap: 'off', noteKey: 'dyn.note.m1.off' };
    if (price <= 35000) {
      var amount = Math.min(9000, price * 0.4);
      return {
        amount: amount,
        noteKey: price <= 22500 ? 'dyn.note.m1.low' : 'dyn.note.m1.mid'
      };
    }
    return { amount: Math.min(7000, price * 0.4), noteKey: 'dyn.note.m1.high' };
  }

  function renderCalc() {
    if (!calc.price || !calc.grant) return;

    var price = parsePrice(calc.price.value);
    var catEl = $('input[name="cat"]:checked');
    var cat = catEl ? catEl.value : 'M1';

    // Tisućice se formatiraju samo kad polje nije u fokusu (da ne skače kursor).
    if (document.activeElement !== calc.price) {
      calc.price.value = isFinite(price) && price > 0 ? num(price) : '';
    }

    $$('.chip').forEach(function (chip) {
      chip.classList.toggle('is-active', parseFloat(chip.getAttribute('data-price')) === price);
    });

    var res = grantFor(price, cat);

    if (!res) {
      calc.grant.textContent = '–';
      if (calc.own) calc.own.textContent = '–';
      if (calc.pct) calc.pct.textContent = '–';
      if (calc.note) calc.note.textContent = t('dyn.empty');
      return;
    }

    var amount = Math.round(res.amount);
    calc.grant.textContent = num(amount);
    if (calc.own) calc.own.textContent = eur(Math.max(0, price - amount));
    if (calc.pct) calc.pct.textContent = Math.round((amount / price) * 100) + ' %';
    if (calc.note) calc.note.textContent = t(res.noteKey);
  }

  function initCalc() {
    if (!calc.price) return;

    calc.price.addEventListener('input', renderCalc);
    calc.price.addEventListener('blur', renderCalc);
    calc.price.addEventListener('focus', function () {
      var p = parsePrice(calc.price.value);
      calc.price.value = isFinite(p) && p > 0 ? String(p) : '';
    });
    $$('input[name="cat"]').forEach(function (radio) {
      radio.addEventListener('change', renderCalc);
    });
    $$('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        calc.price.value = num(parseInt(chip.getAttribute('data-price'), 10));
        renderCalc();
      });
    });
    renderCalc();
  }

  /* ---------- checklist ---------- */
  function readChecks() {
    var raw = store(STORE.checks);
    if (!raw) return [];
    try {
      var arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }

  function writeChecks(list) {
    store(STORE.checks, JSON.stringify(list));
  }

  function initChecklist() {
    var boxes = $$('input[data-check]');
    if (!boxes.length) return;

    var saved = readChecks();
    boxes.forEach(function (box) {
      if (saved.indexOf(box.getAttribute('data-check')) !== -1) box.checked = true;
      box.addEventListener('change', function () {
        var list = boxes.filter(function (b) { return b.checked; })
          .map(function (b) { return b.getAttribute('data-check'); });
        writeChecks(list);
        renderProgress(boxes);
      });
    });

    var reset = $('#reset-checklist');
    if (reset) {
      reset.addEventListener('click', function () {
        boxes.forEach(function (b) { b.checked = false; });
        writeChecks([]);
        renderProgress(boxes);
      });
    }

    renderProgress(boxes);
  }

  function renderProgress(boxes) {
    var done = boxes.filter(function (b) { return b.checked; }).length;
    var total = boxes.length;
    var pctDone = Math.round((done / total) * 100);

    var bar = $('#progress');
    var count = $('#progress-count');

    if (bar) {
      bar.max = total;
      bar.value = done;
      bar.textContent = done + ' / ' + total;
    }
    if (count) count.textContent = done + ' / ' + total;
  }

  /* ---------- copy field list ---------- */
  function initCopy() {
    var btn = $('#copy-fields');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var lines = $$('.fields li').map(function (li) {
        var label = $('span', li);
        var value = $('code', li);
        return (label ? label.textContent.trim() : '') + ': ' + (value ? value.textContent.trim() : '');
      });
      var text = lines.join('\n');

      copyText(text).then(function (ok) {
        flash(btn, ok ? t('dyn.copy.ok') : t('dyn.copy.fail'));
      });
    });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; })
        .catch(function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }

  function flash(btn, message) {
    var original = btn.getAttribute('data-i18n-hr') || btn.textContent;
    btn.textContent = message;
    window.setTimeout(function () {
      applyLang(lang);
      if (!btn.hasAttribute('data-i18n-hr')) btn.textContent = original;
    }, 1900);
  }

  /* ---------- nav ---------- */
  function initNav() {
    var toggle = $('.nav-toggle');
    var list = $('#nav-list');

    if (toggle && list) {
      toggle.addEventListener('click', function () {
        var open = list.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      list.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          list.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    var links = $$('.site-nav a[href^="#"]');
    var sections = links.map(function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    }).filter(Boolean);

    if (!('IntersectionObserver' in window) || !sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- misc ---------- */
  function initYear() {
    var el = $('#year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function init() {
    initTheme();
    initLang();
    initCountdown();
    initCalc();
    initChecklist();
    initCopy();
    initNav();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
