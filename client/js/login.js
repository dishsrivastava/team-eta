'use strict';

let createAccountbutton = document.getElementById('createAccountLogin');

createAccountbutton.addEventListener('click', async () => {
const createemail = document.getElementById('createEmailInput').value;
const createfirstName = document.getElementById('firstName').value;
const createlastName = document.getElementById('createLastName').value;
const createpassword = document.getElementById('createPasswordInput').value;
    let response = await fetch('/createAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                email: createemail,
                password: createpassword,
                firstName: createfirstName,
                lastName:createlastName,
                previousBookings:[],
                upcomingBookings:[]
        })
    });
});

let loginButton = document.getElementById('login');

loginButton.addEventListener('click', async () => {
    const email = document.getElementById('exampleInputEmail1').value;
    //store email in localstorage.json
    const emailJSON = {
        "email": JSON.stringify(email)
    };
    let fs = require('fs');
    fs.writeFile('./../../localStorage.json', emailJSON);
    await fetch('/login');
    document.location.href = "https://u-meet.herokuapp.com/profilePage";
    });

