/** @format */

"use strict";

var SiteNameInput = document.getElementById("SiteNameInput");
var SiteUrlInput = document.getElementById("SiteUrlInput");
var urlList = [];

if (localStorage.getItem("urls") != null) {
  urlList = JSON.parse(localStorage.getItem("urls"));
  display();
}
function addUrl() {
  var urls = {
    name: SiteNameInput.value,
    url: SiteUrlInput.value,
  };
  urlList.push(urls);
  localStorage.setItem("urls", JSON.stringify(urlList));
  display();
  clear();
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

}