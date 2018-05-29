// initialize 'Database' object
let dataset = [];

// Get the modal
let modal = document.querySelector("#modal");

// Get the button that opens the modal
let openModalBtn = document.querySelector("#openModalBtn");

// Get both elements that close the modal
let closeModal = document.querySelectorAll(".close");

// Get the form
let form = document.querySelector("#form");

// Get desired server count when adding a new farm
let modalServerCount = document.querySelector("#serverCount");

// Get a server block fieldset
let serverBlock = document.querySelector(".server-block");

// Get reset form button
let resetServerBtn = document.querySelector("#resetForm");

// Get farm name input
let farmName = document.querySelector("#farmName");

// Get farm ulsPath
let ulsPath = document.querySelector("#ulsPath");

// Get the container
let container = document.querySelector(".container");

// Get Manage link button
let manage = document.querySelector("#manage");

// Get Scan and Import Buttons
let scanBtn = document.querySelector("#scan");
let importBtn = document.querySelector("#import");

// Get  & initialize counters

let farmCounter = document.querySelector("#farmNo");
let serverCounter = document.querySelector("#serverNo");
let limitCounter = document.querySelector("#limitNo");

let farmCount = 0;
let serverCount = 0;

refreshCount();

function refreshCount() {
  farmCount = dataset.length;
  serverCount = 0;
  for (c = 0; c < dataset.length; c++) {
    serverCount += dataset[c].servers.length;
  }

  farmCounter.innerHTML = farmCount;
  serverCounter.innerHTML = serverCount;
  limitCounter.innerHTML = serverCount + " / 60";
}

// Initialize values for the modal form
let ServerDivsLength = 0;
let newFarm = {};
let newServer = {};
let allServers = [];
let datasetCounter = 0;

// Server rows
const serverRow = document.createElement("tr");
const serverRowH1 = document.createElement("th");
const serverRowH2 = document.createElement("th");
const serverRowD1 = document.createElement("td");
const serverRowD2 = document.createElement("td");
const serverRowD3 = document.createElement("td");
const serverRowIcon = document.createElement("i");
const serverRowX = document.createElement("i");

// Call function to load event listeners
loadEventListeners();

// Load event listeners
function loadEventListeners() {
  modalServerCount.addEventListener("input", appendServerFunction);
  openModalBtn.addEventListener("click", openModalFunction);
  form.addEventListener("submit", addFarm);
  container.addEventListener("click", removeElement);
  manage.addEventListener("click", consoleLogManage);
  scanBtn.addEventListener("click", consoleLogScan);
  importBtn.addEventListener("click", consoleLogImport);
}
function consoleLogManage() {
  console.log("Nothing to manage at this point.");
}
function consoleLogScan() {
  console.log("Scanning... ... ... Not!");
}
function consoleLogImport() {
  console.log("Importing... nah, JK");
}

// When the user clicks the (Add Farm), open the modal
function openModalFunction() {
  modal.style.display = "block";
  serverBlock.style.display = "none";
}

// When the user clicks on (x) or (Close), close the modal and reset the form

for (let x in closeModal) {
  closeModal[x].onclick = function() {
    modal.style.display = "none";
    serverBlock.style.display = "none";
    form.reset();
  };
}

// When the user clicks anywhere outside of the modal, close it and reset the form
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    serverBlock.style.display = "none";
    form.reset();
  }
};

resetServerBtn.onclick = function() {
  serverBlock.style.display = "none";
};

// Append number of servers to modal form
function appendServerFunction() {
  serverBlock.style.display = "none";

  if (modalServerCount.value < 0 || modalServerCount.value > 60) {
    alert("Invalid server number");
    return;
  }

  if (modalServerCount.value > ServerDivsLength) {
    createServerFieldsFunction(ServerDivsLength);
    serverBlock.style.display = "block";
  } else if (modalServerCount.value < ServerDivsLength) {
    var valueDifference = ServerDivsLength - modalServerCount.value;
    for (i = 0; i < valueDifference; i++) {
      serverBlock.removeChild(serverBlock.lastChild);
    }
    serverBlock.style.display = "block";
  }

  if (modalServerCount.value === "" || modalServerCount.value === "0") {
    serverBlock.style.display = "none";
  }

  let ServerDivs = document.querySelectorAll(".server-div");
  ServerDivsLength = ServerDivs.length;
}

// Function for appending server input fields to the modal
function createServerFieldsFunction(value) {
  // Create appropriate number of server input fields
  for (value; value < modalServerCount.value; value++) {
    // Create elements
    const serverDivElement = document.createElement("div");
    const labelForName = document.createElement("label");
    const labelForRoles = document.createElement("label");
    const inputForName = document.createElement("input");
    const inputForRoles = document.createElement("input");
    const small = document.createElement("small");
    const em = document.createElement("em");
    const br = document.createElement("br");

    // Set div class
    serverDivElement.className = "server-div";

    // Set label for server name and append to fieldset
    labelForName.setAttribute("for", "serverName");
    labelForName.appendChild(
      document.createTextNode(`${value + 1}. Server name`)
    );
    serverDivElement.appendChild(labelForName);

    // Set input for server name and append to fieldset
    inputForName.id = "serverValue";
    inputForName.setAttribute("name", "serverName");
    inputForName.setAttribute("type", "text");
    inputForName.setAttribute("placeholder", "name");
    inputForName.setAttribute("value", `Server ${value + 1}`);
    inputForName.required = true;
    serverDivElement.appendChild(inputForName);

    // Set label for roles and append to fieldset
    labelForRoles.setAttribute("for", "serverRoles");
    labelForRoles.appendChild(document.createTextNode("Roles"));
    em.appendChild(document.createTextNode(" (one or more)"));
    small.appendChild(em);
    labelForRoles.appendChild(small);
    serverDivElement.appendChild(labelForRoles);

    // Set input for roles and append to fieldset
    inputForRoles.id = `serverRoles`;
    inputForRoles.setAttribute("name", "serverRoles");
    inputForRoles.setAttribute("type", "text");
    inputForRoles.setAttribute("placeholder", "data, apps, front-end");
    inputForRoles.required = true;
    serverDivElement.appendChild(inputForRoles);
    serverBlock.appendChild(serverDivElement);
  }
}

// Create an object out of modal form inputs
function addFarm(event) {
  let serverValues = document.querySelectorAll("#serverValue");
  let serverRoles = document.querySelectorAll("#serverRoles");
  allServers = [];
  newFarm = {};
  datasetCounter = dataset.length;

  datasetCounter++;

  // Display the object in the window
  const table = document.createElement("table");
  table.id = `farmNo${datasetCounter}`;

  // Farm row
  const farmRow = document.createElement("tr");
  const farmRowH1 = document.createElement("th");
  const farmRowH2 = document.createElement("th");
  const farmRowD1 = document.createElement("td");
  const farmRowD2 = document.createElement("td");
  const farmRowD3 = document.createElement("td");
  const farmRowIcon = document.createElement("i");
  const farmRowX = document.createElement("i");

  farmRowIcon.className = "fa fa-server fa-sm";
  farmRowH1.appendChild(farmRowIcon);
  farmRowH1.appendChild(document.createTextNode("Farm:"));
  farmRow.appendChild(farmRowH1);
  farmRowD1.appendChild(document.createTextNode(farmName.value));
  farmRow.appendChild(farmRowD1);
  farmRowH2.appendChild(document.createTextNode("ULS Path:"));
  farmRow.appendChild(farmRowH2);
  farmRowD2.appendChild(document.createTextNode(ulsPath.value));
  farmRow.appendChild(farmRowD2);
  farmRowX.className = "fa fa-times close delete-farm";
  farmRowD3.appendChild(farmRowX);
  farmRow.appendChild(farmRowD3);

  // Append complete farm row to the table
  table.appendChild(farmRow);

  // // Server rows
  let serverRow = [];
  let serverRowH1 = [];
  let serverRowH2 = [];
  let serverRowD1 = [];
  let serverRowD2 = [];
  let serverRowD3 = [];
  let serverRowIcon = [];
  let serverRowX = [];

  for (let i = 0; i < serverValues.length; i++) {
    let serverIndividualRoles = serverRoles[i].value
      .split(/\s*,\s*/)
      .filter(Boolean);
    newServer = {};
    newServer.name = serverValues[i].value;
    newServer.roles = serverIndividualRoles;
    newServer.ID = `serverNo${i + 1}`;
    allServers.push(newServer);

    serverRow[i] = document.createElement("tr");
    serverRowH1[i] = document.createElement("th");
    serverRowH2[i] = document.createElement("th");
    serverRowD1[i] = document.createElement("td");
    serverRowD2[i] = document.createElement("td");
    serverRowD3[i] = document.createElement("td");
    serverRowIcon[i] = document.createElement("i");
    serverRowX[i] = document.createElement("i");

    serverRowIcon[i].className = "fa fa-desktop fa-sm";
    serverRowH1[i].appendChild(serverRowIcon[i]);
    serverRow[i].appendChild(serverRowH1[i]);
    serverRowD1[i].appendChild(document.createTextNode(serverValues[i].value));
    serverRow[i].appendChild(serverRowD1[i]);

    serverRowH2[i].appendChild(document.createTextNode("Roles:"));
    serverRowH2[i].setAttribute("style", "color:white");
    serverRow[i].appendChild(serverRowH2[i]);
    serverRowD2[i].appendChild(
      document.createTextNode(serverIndividualRoles.join(", "))
    );
    serverRow[i].appendChild(serverRowD2[i]);
    serverRowX[i].className = "fa fa-times close delete-server";
    serverRowD3[i].appendChild(serverRowX[i]);
    serverRow[i].appendChild(serverRowD3[i]);
    serverRow[i].id = `serverNo${i + 1}`;

    table.appendChild(serverRow[i]);
  }

  if (serverValues.length + serverCount > 60) {
    alert("You exceeded max server count, Microsoft is down!");
    return;
  }

  container.appendChild(table);

  newFarm = {
    name: farmName.value,
    ulsPath: ulsPath.value,
    servers: allServers,
    ID: `farmNo${datasetCounter}`
  };

  dataset.push(newFarm);

  serverBlock.style.display = "none";
  modal.style.display = "none";
  form.reset();

  // serverBlock.innerHTML = "";
  modalServerCount.value = "";
  refreshCount();
  event.preventDefault();
}

function removeElement(event) {
  if (event.target.classList.contains("delete-farm")) {
    console.log("You deleted this farm from DOM and 'dataset' object:");
    console.log(event.target.parentElement.parentElement.parentElement);
    let farmObjectID =
      event.target.parentElement.parentElement.parentElement.id;

    let i = dataset.length;
    while (i--) {
      if (dataset[i].ID === farmObjectID) {
        dataset.splice(i, 1);
      }
    }

    event.target.parentElement.parentElement.parentElement.remove();
    datasetCounter--;
    refreshCount();
  } else if (event.target.classList.contains("delete-server")) {
    console.log("You deleted this server from DOM and 'dataset' object:");
    console.log(event.target.parentElement.parentElement);
    let farmObjectID =
      event.target.parentElement.parentElement.parentElement.id;
    let serverObjectID = event.target.parentElement.parentElement.id;

    let i = dataset.length;
    while (i--) {
      if (dataset[i].ID === farmObjectID) {
        let j = dataset[i].servers.length;
        while (j--) {
          if (dataset[i].servers[j].ID === serverObjectID) {
            dataset[i].servers.splice(j, 1);
          }
        }
      }
    }
    event.target.parentElement.parentElement.remove();
    refreshCount();
  }
}
