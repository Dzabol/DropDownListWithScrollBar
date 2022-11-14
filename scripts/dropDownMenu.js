const dropDownList = document.querySelector(".dropDownList");
const selectedButton = dropDownList.querySelector(".selectedButton");
const searchInput = dropDownList.querySelector("input");
const listOfElements = dropDownList.querySelector(".listOfElements");

//Array to populate a list
let elementsOnTheList = ["Arrival", "Audi", "BMW", "DAF", "Hyundau", "Alpina", "MAN", "Mercedes-Benz"];
//Function to Populat a list
function addToList(selectedElement) {
    listOfElements.innerHTML = "";
    elementsOnTheList.forEach(element => {
        //add to selected element clas selected
        let isSelected = element == selectedElement ? "selected" : "";
        let li = '<li onclick="updateNemeOfSelectedFromTheList(this)" class="' + isSelected + '">' + element + '</li>';
        listOfElements.insertAdjacentHTML("beforeend", li);
    });
}
//Populate a list
addToList();

//Add to selected element name
function updateNemeOfSelectedFromTheList(selectedLi) {
    searchInput.value = "";
    addToList(selectedLi.innerText);
    dropDownList.classList.remove("active");
    selectedButton.firstElementChild.innerText = selectedLi.innerText;
}

selectedButton.addEventListener("click", () => {
    dropDownList.classList.toggle("active");

    if (dropDownList.classList.contains("active")) {
        searchInput.focus();
    }
});

searchInput.addEventListener("keyup", () => {
    let array = [];
    let searchedValue = searchInput.value;
    //Return all searched elements
    array = elementsOnTheList.filter(data => {
        return data.toLowerCase().startsWith(searchedValue);
    }).map(data => '<li onclick="updateNemeOfSelectedFromTheList(this)">' + data + '</li>').join(""); //Map and join searched values to one list
    listOfElements.innerHTML = array ? array : '<p> Not Found </p>';
});