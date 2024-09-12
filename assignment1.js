/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: SAYONA PERERA Student ID: 169835238 Date: 09/10/24
*
********************************************************************************/ 


const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Sayona Perera",
    "Student Name: ssperera@myseneca.ca",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

console.log("Hello World!"); 

function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manually Testing the "httpRequest" Function
console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about")); 
console.log(httpRequest("GET", "/contact")); 
console.log(httpRequest("POST", "/login")); 
console.log(httpRequest("GET", "/panel")); 
console.log(httpRequest("POST", "/logout")); 
console.log(httpRequest("PUT", "/")); 

// function to generate a random integer value 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Automate tests
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        const result = httpRequest(randVerb, randPath);
        console.log(result);
    }

    setInterval(randomRequest, 1000);
}

// Call automateTests function
automateTests();

