// index.js

import Contact from "./Contacts.js";


// let firstName = 5;
// let lastName = 10;
// document.writeln(firstName+lastName);

let hasJob = false;
if (hasJob) {
    // I have a job
    showMessage("Thanks for visiting, I'm currently employed.");
} else {
    // I need a job
    showMessage("Please look around, I am currently looking for a position.");
}

let today = new Date("");
let dayOfWeek = today.getDay();
if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) {
    document.writeln("Please feel free to send me an email!");
}
// 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.
// document.writeln(today)

// if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) {
//     document.writeln("Please feel free to send me an email!")
// }


function showMessage(message) {
    const formInfo = document.getElementById("formInfo");
    formInfo.innerHTML = "<p>" + message + "<p>";
}

function clearMessage() {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function(event) {
        event.target.style = "background-color: rgba(224, 169, 193, 0.5);";
    });
    item.addEventListener("mouseleave", function(event) {
        event.target.style = "";
    });
}

const skillset = document.getElementsByClassName("skills");
for (let x = 0; x < skillset.length; x++) {
    const item = skillset[x];
    item.addEventListener("mouseenter", function(event) {
        event.target.style = "background-color: rgba(224, 169, 193, 0.5);";
    });
    item.addEventListener("mouseleave", function(event) {
        event.target.style = "";
    });
}