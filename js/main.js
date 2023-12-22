/** @format */

"use strict";

var SiteNameInput = document.getElementById("SiteNameInput");
var SiteUrlInput = document.getElementById("SiteUrlInput");
var urlList = [];
var modal = document.getElementById("exampleModal");
modal.removeAttribute("id");

if (localStorage.getItem("urls") != null) {
  urlList = JSON.parse(localStorage.getItem("urls"));
  display();
}
function addUrl() {
if (validateName() && ValidateUrl()) {
  var urls = {
    name: SiteNameInput.value,
    url: SiteUrlInput.value,
  };
  urlList.push(urls);
  localStorage.setItem("urls", JSON.stringify(urlList));
  display();
  clear();
} else {
  var modal = document.querySelector(".modal");
  console.log(modal);
  modal.setAttribute("id", "exampleModal");
}
}
function display() {
  var cartoona = "";
  for (let index = 0; index < urlList.length; index++) {
    cartoona += `<tr>
                <td>${index + 1}</td>
                <td>${urlList[index].name}</td>
                <td><button class="btn btn-success"> <a href=${
                  "http://" + urlList[index].url
                } target="_blank"  class="text-decoration-none text-white" rel="noopener noreferrer">Visit</a> </button></td>
                <td><button onclick="deleteUrl(${index})" class="btn btn-danger">delete</button></td>                
              </tr>`;
  }
  document.getElementById("tablebody").innerHTML = cartoona;
}
function deleteUrl(i) {
  urlList.splice(i, 1);
  localStorage.setItem("urls", JSON.stringify(urlList));
  display();
}
function clear() {
  SiteNameInput.value = "";
  SiteUrlInput.value = "";
}


// validation
function validateName(){
var regexName = /^[a-z]{3,15}$/
var text= SiteNameInput.value;
if(regexName.test(text)){
    SiteNameInput.classList.add("is-valid");
      SiteNameInput.classList.remove("is-invalid");
      return true;
}
else{
       SiteNameInput.classList.add("is-invalid");
       SiteNameInput.classList.remove("is-valid"); 
       return false;
}
}

function ValidateUrl(){
var urlRegex = /^[a-z]{3,15}.com$/;
var text = SiteUrlInput.value;
if (urlRegex.test(text)) {
  SiteUrlInput.classList.add("is-valid");
  SiteUrlInput.classList.remove("is-invalid");
  return true;
} else {
  SiteUrlInput.classList.add("is-invalid");
  SiteUrlInput.classList.remove("is-valid");
  return false;
}
}

