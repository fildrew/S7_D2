const nameInput = document.getElementById("name");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton");

const newArray = [];

saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    const newName = {
        name: nameInput.value,
    };
    newArray.push(newName);
    const newstring = JSON.stringify(newArray);
    localStorage.setItem("name", newstring);
    nameInput.value = "";
    addName();
});

const addName = function () {
    let names = document.querySelector("ul");
    names.innerHTML = "";
    newArray.forEach((contact) => {
        const newLi = document.createElement("li");
        newLi.innerText = contact.name;
        names.appendChild(newLi);
    });
};

removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("nome");
    let names = document.querySelector("ul");
    names.innerHTML = "";
});