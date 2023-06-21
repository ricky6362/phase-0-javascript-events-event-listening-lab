// accessing the #input element
const input = document.getElementById("input")

// creating my alert function
function sayHi(){
    alert("I was clicked")
}

// adding the event listener that triggers the alert text.
function addingEventListener(input) {
    input.addEventListener("click", sayHi)
}

// invoking the function to see it on the browser
addingEventListener(input)