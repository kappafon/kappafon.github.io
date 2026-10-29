/* Poticaj 2026 - prijevodi / translations
 * Hrvatski je izvorni jezik i nalazi se u index.html (radi i bez JS-a).
 * Ovdje su engleske zamjene za [data-i18n] elemente + dinamički stringovi
 * za oba jezika (brojilo, kalkulator, poruke).
 */
(function () {
  'use strict';

  var en = {
    'skip': 'Skip to content',

    /* ---- nav ---- */
    'nav.tldr': 'In short',
    'nav.amount': 'Amount',
    'nav.prep': 'Checklist',
    'nav.day': 'Day of',
    'nav.docs': 'Documents',
    'nav.mistakes': 'Mistakes',

    /* ---- hero ---- */
    'hero.eyebrow': 'FZOEU · Call EnU-2/26 · natural persons',
    'hero.title': 'The EV subsidy, without the headache',
    'hero.lead':
      'The government is opening applications for 20 million euros in grants for new electric vehicles. ' +
      'The money is limited and applications are processed in the order they arrive - which is why preparation ' +
      'beats fast typing. Everything you need to know, check and prepare is here.',
    'hero.cta1': 'Open the checklist',
    'hero.cta2': 'Work out my amount',
    'hero.mini1': 'total budget',
    'hero.mini2': 'vehicles',
    'hero.mini3': 'max. share',

    /* ---- countdown ---- */
    'cd.label': 'Applications open in',
    'cd.d': 'd',
    'cd.h': 'h',
    'cd.m': 'min',
    'cd.s': 's',
    'cd.tz': 'local time',

    /* ---- tl;dr ---- */
    'tldr.kicker': '30 seconds',
    'tldr.title': 'Six things that decide whether you get the money',
    'tldr.sub': 'If this is all you read, you have read enough to avoid the classic mistakes.',
    'tldr.1.t': 'One person - one vehicle',
    'tldr.1.p':
      'The grant goes only to an adult natural person resident in Croatia. The vehicle must be yours ' +
      '(or on a financial lease) and registered in Croatia for the first time.',
    'tldr.2.t': 'New only, electric only',
    'tldr.2.p':
      'New electric vehicles in category M1 (car) and L1–L7 (moped, motorcycle, tricycle, quad). ' +
      'Used cars, plug-in hybrids and e-bikes are not eligible.',
    'tldr.3.t': 'Three price brackets',
    'tldr.3.p':
      'Up to €22,500 you get 40% of the price. From €22,500 to €35,000 you get €9,000. ' +
      'From €35,000 to €62,500 you get €7,000. Above €62,500 - nothing.',
    'tldr.4.t': 'The application is online only',
    'tldr.4.p':
      'The eFZOEU system (fondovi.gov.hr) and NIAS credentials at the “significant” level. ' +
      'No paper, no email, no queue at the counter - but there is a deadline.',
    'tldr.5.t': 'You get paid after you buy',
    'tldr.5.p':
      'This is not a discount at the dealership. You pay for the car, register it, then claim the money. ' +
      'The Fund pays within 30 days of receiving complete documentation.',
    'tldr.6.t': 'You are tied in for two years',
    'tldr.6.p':
      'The vehicle must stay yours (or leased) for 2 years from the payout, with the FZOEU sticker ' +
      'clearly visible. Selling early means repaying the full amount with interest.',

    /* ---- calculator ---- */
    'calc.kicker': 'Calculation',
    'calc.title': 'How much would I actually get?',
    'calc.sub':
      'The Fund always pays the lower of two amounts: the fixed maximum or 40% of the price. ' +
      'Enter the price from your quote (VAT included) and see the result.',
    'calc.priceLabel': 'Vehicle price incl. VAT',
    'calc.catLabel': 'Vehicle category',
    'calc.catM1': 'Car (M1)',
    'calc.catL': 'Moped / motorcycle (L1–L7)',
    'calc.grantLabel': 'Your grant',
    'calc.ownLabel': 'Your cost',
    'calc.pctLabel': 'Co-financing share',
    'calc.brTitle': 'Price brackets for cars (M1)',
    'calc.br1': 'up to €22,500',
    'calc.br1v': 'up to €9,000',
    'calc.br2': '€22,500 – €35,000',
    'calc.br2v': '€9,000',
    'calc.br3': '€35,000 – €62,500',
    'calc.br3v': '€7,000',
    'calc.br4': 'above €62,500',
    'calc.br4v': '€0',
    'calc.brAxis': 'Vehicle price incl. VAT →',
    'calc.brNote': 'For L1–L7 the maximum is €2,500 (40% of the price), with a vehicle price cap of €35,000.',

    /* ---- pre-check ---- */
    'prep.kicker': 'Before 5 November',
    'prep.title': 'Pre-check: do you have everything?',
    'prep.sub':
      'Ticks are saved in this browser - you can come back tomorrow and carry on. Goal: all green before 9:00.',
    'prep.done': 'ready',
    'prep.reset': 'Reset',
    'prep.a': 'The week before - paperwork and access',
    'prep.a1': 'NIAS credentials work - try logging in at fondovi.gov.hr (eID + PIN, mToken or Certilia)',
    'prep.a2': 'You can see call EnU-2/26 in the system with status “opens 5 Nov at 9:00”',
    'prep.a3': 'Certificate of residence - order it on 3–4 Nov (it must not be older than 30 days on the day you apply)',
    'prep.a4': 'The dealer’s written offer has all 5 items: price in €, manufacturer, model, drive type, category',
    'prep.a5': 'The VAT-inclusive price is within the limits (€35,000 for the €9,000 tier, €62,500 absolute cap)',
    'prep.a6': 'Application form (Annex 1, .xlsx) filled in and saved to disk',
    'prep.a7': 'Statement (Annex 2) signed - by hand then scanned, or with a qualified e-signature',
    'prep.a8': 'All documents in PDF, filenames without diacritics, less than 100 MB in total',
    'prep.a9': 'OIB, IBAN, mobile and e-mail in one place, ready to copy-paste',
    'prep.a10': 'Decision made: outright purchase or financial lease (operating lease is not eligible)',
    'prep.a11': 'No outstanding debts to the Fund (old unsettled contracts block the application)',
    'prep.b': 'On the day - 5 November',
    'prep.b1': 'Logged in around 8:45–8:55, sitting on the call page',
    'prep.b2': 'One device, one tab - the session lasts 24 h and a second device kicks it out',
    'prep.b3': 'Stable connection (cable if possible) and a phone as backup hotspot',
    'prep.b4': 'All three tabs filled in, documents uploaded, application submitted',
    'prep.b5': 'Confirmation saved (PDF or screenshot) and the e-Citizens inbox checked',
    'prep.c': 'After applying - until the payout',
    'prep.c1': 'Watch your e-mail and e-Citizens inbox - the Fund may ask for clarification',
    'prep.c2': 'Answer any clarification immediately, within the given deadline',
    'prep.c3': 'Buy and register by 31 Mar 2028, submit the payment request by 30 Apr 2028',
    'prep.c4': 'FZOEU sticker on the vehicle + 2 years of ownership from the payout',

    /* ---- day of ---- */
    'day.kicker': 'Day D',
    'day.title': '5 November, from 8:45 to 9:15',
    'day.sub':
      'The system opens at 9:00. Before that you cannot start the application, but you can be logged in and ready. ' +
      'This is the order that saves minutes.',
    'day.1.t': 'Log in and open the call',
    'day.1.p': 'NIAS login at fondovi.gov.hr, open EnU-2/26. Make sure it is the right call (EnU-2/26, natural persons) - not the one for companies.',
    'day.2.t': 'Everything at hand, nothing to search for',
    'day.2.p': 'A folder with the 4 files open, a text file with your OIB, IBAN and vehicle details. Phone nearby in case NIAS asks for confirmation.',
    'day.3.t': '“Start application” and the first tab',
    'day.3.p': 'Applicant data is pulled from NIAS - check it, do not retype it. Address, IBAN and bank must match the real account.',
    'day.4.t': 'Second tab: documents',
    'day.4.p': 'Upload the form, the residence certificate, the statement and the offer. If something is rejected, check the filename (no accents, no spaces) and the format.',
    'day.5.t': 'Third tab: vehicle and amount',
    'day.5.p': 'Category, manufacturer, model, drive type, VAT-inclusive price and the amount requested. The amount must match the offer - and the 40% rule.',
    'day.6.t': 'Submit - and change nothing after that',
    'day.6.p': 'Once submitted, the application cannot be edited or added to, and a second application is not possible. Save the confirmation and a screenshot.',
    'day.warn.t': 'Reality check: this behaves like a race',
    'day.warn.p':
      'In its official Q&A the Fund says the call is not “fastest finger”. But the call text itself says applications are processed ' +
      '<strong>in order of receipt</strong>, and the money is capped at 20 million euros. The opening has already been postponed twice ' +
      'because of the level of interest. Conclusion: be ready at 9:00, but never trade accuracy for speed.',

    /* ---- documents ---- */
    'docs.kicker': 'Paperwork',
    'docs.title': 'Four documents for the application',
    'docs.sub': 'Everything except the form goes in as PDF. An incomplete application is rejected - there is no topping it up later.',
    'docs.th1': 'Document',
    'docs.th2': 'Format',
    'docs.th3': 'From',
    'docs.th4': 'Usual trap',
    'docs.d1': 'Application form (Annex 1)',
    'docs.d1who': 'You, on the Fund’s template',
    'docs.d1got': 'It must stay an Excel file - PDF is not accepted. Amounts must match the offer.',
    'docs.d2': 'Certificate of residence',
    'docs.d2who': 'Police / e-Citizens',
    'docs.d2got': 'Must not be older than 30 days on the day you apply. Order it on 3–4 Nov.',
    'docs.d3': 'Applicant’s statement (Annex 2)',
    'docs.d3who': 'You',
    'docs.d3got': 'Handwritten signature then scan, or a qualified e-signature. A pasted image of a signature does not count.',
    'docs.d4': 'Written offer (informative quote)',
    'docs.d4who': 'The dealer',
    'docs.d4got': 'Missing any of the 5 elements (price in €, manufacturer, model, drive type, category) sinks the application.',
    'docs.d5': 'Special power of attorney',
    'docs.d5who': 'Notary public',
    'docs.d5got': 'Only if someone else applies on your behalf. A lawyer’s power of attorney needs no notarisation.',

    'fields.title': 'The data you will be typing',
    'fields.sub': 'Prepare it as plain text and paste it in. The form asks for exactly this:',
    'fields.f1': 'First and last name',
    'fields.f1v': 'as it appears in NIAS',
    'fields.f2': 'OIB (tax number)',
    'fields.f2v': '11 digits',
    'fields.f3': 'Address',
    'fields.f3v': 'street, number, place, postcode, county',
    'fields.f4': 'IBAN and bank',
    'fields.f4v': 'an account in your name',
    'fields.f5': 'Mobile and e-mail',
    'fields.f5v': 'ones you actually read',
    'fields.f6': 'Vehicle',
    'fields.f6v': 'category, manufacturer, model, drive type',
    'fields.f7': 'Price incl. VAT',
    'fields.f7v': 'from the offer, in euros',
    'fields.f8': 'Amount requested',
    'fields.f8v': 'below 40% and below the maximum',
    'fields.copy': 'Copy the list',

    'after.title': 'After the purchase, for the payout',
    'after.sub': 'You collect this once the car arrives - but you know now what to ask the dealer for:',
    'after.1': 'Invoice with the vehicle details and proof the full amount was paid',
    'after.2': 'Certificate of Conformity (CoC) showing the VIN',
    'after.3': 'Copy of the registration document - owner/lessee is the applicant',
    'after.4': 'Photo of the vehicle with plates and the FZOEU sticker',
    'after.5': 'For a lease: contract and repayment schedule, with at least the grant amount already paid',
    'after.6': 'Confirmation of an IBAN in your name',
    'after.note': 'Payment request deadline: 30 Apr 2028. The Fund pays within 30 days of complete documentation.',

    /* ---- mistakes ---- */
    'mis.kicker': 'Most common',
    'mis.title': 'Mistakes that cost you the grant',
    'mis.sub': 'All of them are avoided with one check before submitting. These are the ones that keep happening.',
    'mis.1.t': 'A price €300 over the line',
    'mis.1.p': 'A €35,300 car falls into the €7,000 bracket instead of €9,000. A €300 discount puts you back in the higher bracket - the difference is €2,000.',
    'mis.1.c': '−€2,000',
    'mis.2.t': 'A 31-day-old certificate',
    'mis.2.p': 'The certificate of residence must be less than 30 days old on the day you apply. The most common reason for rejecting otherwise tidy applications.',
    'mis.2.c': 'rejected',
    'mis.3.t': 'A picture of a signature',
    'mis.3.p': 'Pasting an image of a signature into a PDF is not a signature. Either print, sign and scan, or sign with a qualified e-signature.',
    'mis.3.c': 'rejected',
    'mis.4.t': 'An offer without the category',
    'mis.4.p': 'The offer must state the price in euros, manufacturer, model, drive type and category. Ask for a corrected one in good time.',
    'mis.4.c': 'rejected',
    'mis.5.t': 'Paying before the call',
    'mis.5.p': 'If the vehicle was paid in full before 9 Oct 2026 it is not eligible. A down payment is fine if paid on or after 1 Jan 2026.',
    'mis.5.c': 'no grant',
    'mis.6.t': 'Operating lease',
    'mis.6.p': 'Only a financial lease qualifies, with repayment of up to 5 years and at least the grant amount paid before you claim.',
    'mis.6.c': 'no grant',
    'mis.7.t': 'Messy filenames',
    'mis.7.p': 'The system rejects diacritics and repeated spaces in filenames. Rename to e.g. <code>izjava.pdf</code> before uploading.',
    'mis.7.c': 'lost minutes',
    'mis.8.t': 'No NIAS on the day',
    'mis.8.p': 'Without significant-level credentials you cannot even open the application. Activating an eID or mToken takes time - try it today.',
    'mis.8.c': 'no application',

    /* ---- faq ---- */
    'faq.kicker': 'Questions',
    'faq.title': 'What everyone asks',
    'faq.q1': 'Can I get the grant for a used car or a plug-in hybrid?',
    'faq.a1': 'No. Only new electric vehicles being registered in Croatia for the first time qualify. Used vehicles and plug-in hybrids are not in the programme, and neither are e-bikes.',
    'faq.q2': 'Do I have to pay for the car before applying?',
    'faq.a2': 'No - quite the opposite: a vehicle paid in full before the call was published (9 Oct 2026) is not eligible. A written offer is enough for the application. A down payment is fine if it was incurred and paid on or after 1 Jan 2026.',
    'faq.q3': 'What if the car costs more than €35,000?',
    'faq.a3': 'You get €7,000 instead of €9,000, all the way up to €62,500 incl. VAT. Above that the vehicle is not eligible. In both cases the Fund covers at most 40% of the price.',
    'faq.q4': 'Can I submit more than one application?',
    'faq.a4': 'No. One person can receive funding for at most one vehicle. Once submitted, an application cannot be edited or added to, and a new application by the same applicant is not possible.',
    'faq.q5': 'When does the money arrive?',
    'faq.a5': 'After the purchase, the registration and the complete documentation. The Fund pays within 30 days of a complete payment request, and the request must be filed by 30 Apr 2028.',
    'faq.q6': 'How long must I keep the car?',
    'faq.a6': 'Two years from the payout date, owned or leased, with the FZOEU sticker visible on the vehicle. Sell earlier and you repay the whole amount with statutory default interest.',
    'faq.q7': 'Who do I ask if I get stuck?',
    'faq.a7': 'The Fund: 01 6448-444, pozivni.centar@fzoeu.hr. For the eFZOEU system: efzoeu-podrska@fina.hr, weekdays 8–16. For payouts: fond.enu@fzoeu.hr.',
    'faq.q8': 'Is this an official page?',
    'faq.a8': 'No. This is an unofficial summary compiled from call EnU-2/26, its Amendment II, the official Q&A and the eFZOEU user guide. The authoritative text is the one published on fzoeu.hr - check it before you submit.',

    /* ---- reality ---- */
    'real.title': 'Three numbers that explain why you prepare in advance',
    'real.v3': '5 days',
    'real.s1': 'total budget for this call',
    'real.s2': 'vehicles expected',
    'real.s3': 'how long last year’s business call lasted (€21.2 M)',
    'real.note':
      'The application opening for natural persons has already been postponed twice - from 21 Oct to 28 Oct, then to 5 Nov - ' +
      'because of exceptional interest and additional system testing. So: prepare the paperwork early, and be ready before 9:00 on the day.',

    /* ---- sources ---- */
    'src.title': 'Sources and verification',
    'src.1': 'the authoritative text: amounts, conditions, documents, deadlines',
    'src.2': 'moves the start of applications to 5 Nov 2026, 09:00',
    'src.3': 'official clarifications of conditions and procedure',
    'src.4': 'steps in the system, file formats, limits',
    'src.5': 'the eFZOEU system where the application is filed',
    'src.6': 'announcement of the postponement and a summary of conditions',
    'src.disclaimer':
      'An unofficial summary, made for a friend who is going for the grant. Not legal advice and no substitute for the official text. ' +
      'If anything differs, what is written on fzoeu.hr applies.',

    /* ---- footer ---- */
    'footer.note': 'static page, no cookies, no tracking',
    'footer.updated': 'Updated',

    /* ---- dynamic ---- */
    'dyn.before': 'Applications are not open yet - use the time to prepare.',
    'dyn.open': 'Applications are open - go.',
    'dyn.empty': 'Enter a price to see the calculation.',
    'dyn.note.m1.low': 'Your price is in the lowest bracket - the Fund covers 40% of the price.',
    'dyn.note.m1.mid': 'Above €22,500 the grant is a flat €9,000 - 40% would be more, but the cap applies.',
    'dyn.note.m1.high': 'Above €35,000 the grant drops to €7,000. At €35,000 you would get €9,000 - €2,000 more.',
    'dyn.note.m1.off': 'Above €62,500 incl. VAT the vehicle is not eligible for co-financing.',
    'dyn.note.l.low': 'For categories L1–L7 the Fund covers 40% of the price, capped at €2,500.',
    'dyn.note.l.cap': 'The €2,500 cap applies - you would need a price of €6,250 or less for 40% to be lower.',
    'dyn.note.l.off': 'For L1–L7 the vehicle price cap is €35,000 incl. VAT.',
    'dyn.copy.ok': 'Copied',
    'dyn.copy.fail': 'Copy failed - select the text manually.',
    'dyn.price': '€{v}'
  };

  var hr = {
    'dyn.before': 'Prijave još nisu otvorene - iskoristi vrijeme za pripremu.',
    'dyn.open': 'Prijave su otvorene - vrijeme je.',
    'dyn.empty': 'Upiši cijenu da vidiš izračun.',
    'dyn.note.m1.low': 'Cijena je u najnižem razredu - Fond pokriva 40 % cijene.',
    'dyn.note.m1.mid': 'Iznad 22.500 € poticaj je fiksno 9.000 € - 40 % bi bio viši, ali maksimum je 9.000 €.',
    'dyn.note.m1.high': 'Iznad 35.000 € poticaj pada na 7.000 €. Na 35.000 € dobio bi 9.000 € - 2.000 € više.',
    'dyn.note.m1.off': 'Iznad 62.500 € s PDV-om vozilo nije prihvatljivo za sufinanciranje.',
    'dyn.note.l.low': 'Za kategorije L1–L7 Fond pokriva 40 % cijene, najviše 2.500 €.',
    'dyn.note.l.cap': 'Vrijedi gornja granica od 2.500 € - 40 % bi bio niži tek do cijene 6.250 €.',
    'dyn.note.l.off': 'Za L1–L7 najviša cijena vozila je 35.000 € s PDV-om.',
    'dyn.copy.ok': 'Kopirano',
    'dyn.copy.fail': 'Kopiranje nije uspjelo - označi tekst ručno.',
    'dyn.price': '{v} €'
  };

  window.I18N = { hr: hr, en: en };
})();
