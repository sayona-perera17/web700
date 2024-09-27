// modules/collegeData.js
const fs = require('fs');

// Define the Data class to store student and course data
class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

// Initialize function to read student and course data
function initialize() {
    return new Promise(function(resolve, reject) {
        fs.readFile('Assignment 2/data/students.json', 'utf8', function(err, studentDataFromFile) {
            if (err) {
                reject("unable to read students.json");
                return; // Exit the function
            }
            // Once students.json is read, read courses.json
            fs.readFile('Assignment 2/data/courses.json', 'utf8', function(err, courseDataFromFile) {
                if (err) {
                    reject("unable to read courses.json");
                    return; // Exit the function
                }
                
                // Create a new Data instance and assign it to dataCollection
                dataCollection = new Data(JSON.parse(studentDataFromFile), JSON.parse(courseDataFromFile));
                resolve(); // Indicate successful initialization
            });
        });
    });
}

// Function to get all students
function getAllStudents() {
    return new Promise(function(resolve, reject) {
        if (dataCollection && dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("no results returned");
        }
    });
}

// Function to get Teaching Assistants (TAs)
function getTAs() {
    return new Promise(function(resolve, reject) {
        const TAs = dataCollection.students.filter(student => student.TA);
        if (TAs.length > 0) {
            resolve(TAs);
        } else {
            reject("no results returned");
        }
    });
}

// Function to get all courses
function getCourses() {
    return new Promise(function(resolve, reject) {
        if (dataCollection && dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("no results returned");
        }
    });
}

// Export the functions for use in a2.js
module.exports = { initialize, getAllStudents, getTAs, getCourses };
