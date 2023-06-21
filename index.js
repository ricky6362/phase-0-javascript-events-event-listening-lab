// adding the event listener that triggers the alert text.
function addingEventListener() {
    // accessing the #input element
    const input = document.getElementById("input")

    // creating my alert function
    function sayHi(){
        alert("I was clicked")
    }

    // adding the eventlistener to our #input element
    input.addEventListener("click", sayHi)

}
