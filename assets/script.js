// $(function () {

    // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
    
    // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
    
    // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
    
    // TODO: Add code to display the current date in the header of the page.
//   });

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

// Variables
const rNow = document.querySelector('#currentDay')
const today = new Date();
const dayJsObject = dayjs().format('dddd, MMMM D, YYYY h:mm A');
//const saveB = document.querySelector('#save0')
const lead = document.querySelector('.lead')
const entry = document.querySelector('.description')
const saveBtn = document.querySelector('.saveBtn')


// Displaying current date
rNow.textContent = dayjs().format('dddd, MMMM D, YYYY h:mm A');
console.log(dayJsObject);

saveBtn.addEventListener('click', saveEntry);

// Event Listener
// saveB.addEventListener('click', saveEntry);

// Saving to Local Storage
function saveEntry(event) {
    event.preventDefault();
    var sch = event.target.previousElementSibling.id
    //var entry1 = entry.value.trim();
    //console.log(event.target.previousElementSibling.value)
    var entry = event.target.previousElementSibling.value
    //console.log(event.target.id)
    window.localStorage.setItem(sch, JSON.stringify(entry));
    
    //console.log(entry1);
    //alert ('Event Saved');
}

// The Long way variables

const saveB = document.querySelector('#save0')
const saveB1 = document.querySelector('#save1')
const saveB2 = document.querySelector('#save2')
const saveB3 = document.querySelector('#save3')
const saveB4 = document.querySelector('#save4')
const saveB5 = document.querySelector('#save5')
const saveB6 = document.querySelector('#save6')
const saveB7 = document.querySelector('#save7')
const saveB8 = document.querySelector('#save8')
const saveB9 = document.querySelector('#save9')
const saveB10 = document.querySelector('#save10')
const saveB11 = document.querySelector('#save11')
const saveB12 = document.querySelector('#save12')
const saveB13 = document.querySelector('#save13')
const saveB14 = document.querySelector('#save14')
const saveB15 = document.querySelector('#save15')
const saveB16 = document.querySelector('#save16')
const saveB17 = document.querySelector('#save17')
const saveB18 = document.querySelector('#save18')
const saveB19 = document.querySelector('#save19')
const saveB20 = document.querySelector('#save20')
const saveB21 = document.querySelector('#save21')
const saveB22 = document.querySelector('#save22')
const saveB23 = document.querySelector('#save23')

saveB.value = window.localStorage.getItem("save0")
saveB1.value = window.localStorage.getItem("save1")
saveB2.value = window.localStorage.getItem("save2")
saveB3.value = window.localStorage.getItem("save3")
saveB4.value = window.localStorage.getItem("save4")
saveB5.value = window.localStorage.getItem("save5")
saveB6.value = window.localStorage.getItem("save6")
saveB7.value = window.localStorage.getItem("save7")
saveB8.value = window.localStorage.getItem("save8")
saveB9.value = window.localStorage.getItem("save9")
saveB10.value = window.localStorage.getItem("save10")
saveB11.value = window.localStorage.getItem("save11")
saveB12.value = window.localStorage.getItem("save12")
saveB13.value = window.localStorage.getItem("save13")
saveB14.value = window.localStorage.getItem("save14")
saveB15.value = window.localStorage.getItem("save15")
saveB16.value = window.localStorage.getItem("save16")
saveB17.value = window.localStorage.getItem("save17")
saveB18.value = window.localStorage.getItem("save18")
saveB19.value = window.localStorage.getItem("save19")
saveB20.value = window.localStorage.getItem("save20")
saveB21.value = window.localStorage.getItem("save21")
saveB22.value = window.localStorage.getItem("save22")
saveB23.value = window.localStorage.getItem("save23")

//console.log("hello")

// The Long way eventListener

// saveB.addEventListener('click', saveEntry);
// saveB1.addEventListener('click', saveEntry);
// saveB2.addEventListener('click', saveEntry);
// saveB3.addEventListener('click', saveEntry);
// saveB4.addEventListener('click', saveEntry);
// saveB5.addEventListener('click', saveEntry);
// saveB6.addEventListener('click', saveEntry);
// saveB7.addEventListener('click', saveEntry);
// saveB8.addEventListener('click', saveEntry);
// saveB9.addEventListener('click', saveEntry);
// saveB10.addEventListener('click', saveEntry);
// saveB11.addEventListener('click', saveEntry);
// saveB12.addEventListener('click', saveEntry);
// saveB13.addEventListener('click', saveEntry);
// saveB14.addEventListener('click', saveEntry);
// saveB15.addEventListener('click', saveEntry);
// saveB16.addEventListener('click', saveEntry);
// saveB17.addEventListener('click', saveEntry);
// saveB18.addEventListener('click', saveEntry);
// saveB19.addEventListener('click', saveEntry);
// saveB20.addEventListener('click', saveEntry);
// saveB21.addEventListener('click', saveEntry);
// saveB22.addEventListener('click', saveEntry);
// saveB23.addEventListener('click', saveEntry);