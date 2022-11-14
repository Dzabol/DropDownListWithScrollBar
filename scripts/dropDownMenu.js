//Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//Loop throught all dropdown elements
dropdowns.forEach(dropdown => {
    //get inner elements from each dropDown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const listOfElements = dropdown.querySelector('.listOfElements');
    const options = dropdown.querySelectorAll('.listOfElements li');
    const selected = dropdown.querySelector('.selected');

    //Add a click event to the select element
    select.addEventListener('click', () => {
        //Add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles to the caret emenent
        caret.classList.toggle('caret-rotate');
        //Add the open styles to the listOfElements element
        listOfElements.classList.toggle('listOfElements-open');

    });

    //Loop throught all option elements
    options.forEach(option => {
        //Add a click event to the option element
        option.addEventListener('click', () => {
            //Change selected inner text to clicket option inner text
            selected.innerText = option.innerText;
            //Add the clicked selected styles to the select element
            select.classList.remove('select-clicked');
            //Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //Add the open style to the listOfElements element
            listOfElements.classList.remove('listOfElements-open');
            //Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            //Add active class to clicked option element
            option.classList.add('active');
        });
    });
});