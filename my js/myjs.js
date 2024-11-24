
// localStorage.getItem();
// localStorage.setItem();
// localStorage.removeItem();

var editingIndex = -1;


var allSites = [];
var websiteNameInput = document.querySelector('#Site_Name');
var websiteUrlInput = document.querySelector('#Site_URL');
// localStorage.getItem();     bs lw hya fadya awl mara a5osh,  a3ml condition eno no get
// var regexName= /^[a-zA-Z]{3,}$/
// var regexUrl= /^https:\/\/.+\.com$/


function validateInputs(nameInput, urlInput) {
  const nameRegex = /^[a-zA-Z0-9 ]{3,}$/;
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

  // Validate inputs
  const isNameValid = nameRegex.test(nameInput.value.trim());
  const isUrlValid = urlRegex.test(urlInput.value.trim());

  // Apply classes
  nameInput.classList.toggle('is-valid', isNameValid);
  nameInput.classList.toggle('is-invalid', !isNameValid);

  urlInput.classList.toggle('is-valid', isUrlValid);
  urlInput.classList.toggle('is-invalid', !isUrlValid);

  return isNameValid && isUrlValid; // Return validation result
}


function addingNewSite() {
  var site = {
      name: websiteNameInput.value,
      url: websiteUrlInput.value
  };

  // Validate inputs
  if (!validateInputs(websiteNameInput, websiteUrlInput)) {
      alert('Please fix validation. Name cannot be less than 3 characters, and URL should start with https:// and end with .com.');
      return false; // Prevent form submission
  }

  if (editingIndex != -1) {
      allSites[editingIndex] = site;
      editingIndex = -1;
  } else {
      allSites.push(site);
  }

  displaySite();
  clearForm();
  validateInputs(websiteNameInput, websiteUrlInput);
}


function updatingExistingSite(idx){
  editingIndex = idx;
AutoFillingForm(idx);
allSites[idx].name  =  websiteNameInput.value
allSites[idx].url  =  websiteUrlInput.value


}

function AutoFillingForm(idx){
  websiteNameInput.value  =   allSites[idx].name; 
  websiteUrlInput.value  =  allSites[idx].url; 
}

function displaySite() {
  var cartoona = '';
  for (var i = 0; i < allSites.length; i++) {

    cartoona += `


            <tr>
                <th scope="row">${i+1}</th>
                <td>${allSites[i].name}</td>
                <td>${allSites[i].url}</td>
                <td> <button onclick=" window.open('${allSites[i].url}', '_blank') " class="btn btn-outline-success ">VISIT</button></td>
                <td> <button onclick=" updatingExistingSite(${i}) " class="btn btn-outline-primary "><i class="fa-regular fa-pen-to-square p-2"></i>UPDATE</button></td>
                <td> <button onclick="  deleteSite(${i})" class="btn btn-outline-danger "><i class="fa-solid fa-trash p-2">DELETE</button></td>
            </tr>


`
  }
  document.getElementById('alDisplay').innerHTML = cartoona;
}

function clearForm() {
  websiteNameInput.value= "";
  websiteUrlInput.value = '';


};

function deleteSite(idx) {
  allSites.splice(idx, 1);
  // localStorage.removeItem();
  displaySite();
};

// var variable = document.getElementById('Search').value;
var searchTerm = variable.value;
function searchName(variable) {


  var cartoona = "";
  for (var i = 0; i < allSites.length; i++) {
    if (allSites[i].name.toLowerCase().includes(variable.toLowerCase())) {
      // console.log(allSites[i]);
      cartoona = cartoona + `            <tr>
                <th scope="row">${i+1}</th>
                <td>${allSites[i].name}</td>
                <td>${allSites[i].url}</td>
                <td> <button onclick=" window.open('${allSites[i].url}', '_blank') " class="btn btn-outline-success ">VISIT</button></td>
                <td> <button onclick=" updatingExistingSite(${i}) " class="btn btn-outline-primary "><i class="fa-regular fa-pen-to-square p-2"></i>UPDATE</button></td>
                <td> <button onclick="  deleteSite(${i})" class="btn btn-outline-danger "><i class="fa-solid fa-trash p-2">DELETE</button></td>
            </tr>`
    }
  }
  document.getElementById('alDisplay').innerHTML = cartoona
}
// console.;log("wrtithe uploading a minin virus")
//document get element by id(#dd)