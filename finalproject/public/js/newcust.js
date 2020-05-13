// Requiring necessary npm packages
const fs = require('fs');
const generateHTML = require('../../generateHTML');
const axios = require('axios');
// const pdf = require('html-pdf');
var mykey = apiKey.myKey;

let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;

document.querySelector("#date").valueAsDate = today;

// AJAX call
var api = function generate() {
    var baseURL = "https://maps.googleapis.com/maps/api/staticmap?" + address + "&zoom=20&size=400x400&maptype=satellite" + mykey;
    axios.get(baseURL)
        .then(function (response) {
            console.log(response);
        }).catch(console.log("Not working"))
};

const databaseData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',

    streetAddress: '',
    city: '',
    state: '',

    submitDate: '',
    notes: '',
    roofGrade: ''
};

const address = databaseData.streetAddress + databaseData.city + databaseData.state

api();

const newFile = databaseData.firstName + databaseData.lastName

function writeToFile(newFile, html) {
    console.log('Making your HTML file ...');
    fs.writeFile(newFile, html, (err) => {
        if (err) {
            return console.log(err);
        }
    });
};

const html = generateHTML.generateHTML(databaseData);
writeToFile(newFile, html);


$(document).ready(function () {
    console.log('Ready!');
    $("#submit").submit(function() {
        generate();
    });
});
