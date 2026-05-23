const API_URL = 'http://localhost:3000/users';

//load users
async function getUsers(){
    const response = await fetch(API_URL);
    const users = await response.json();
    const userList = document.getElementById('userList');
    userList.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li);
    });
}

//Add user
async function addUser(){
    const nameInput = document.getElementById('nameInput');

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name: nameInput.value
        })
    });
    const newUser = await response.json();
    nameInput.value = "";
    getUsers();
}

getUsers();