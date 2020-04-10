const myInput = document.querySelector('#psw')
const letter = document.querySelector("#letter")
const capital = document.querySelector('#capital')
const number = document.querySelector("#number")
const length = document.querySelector("#length")

// when the user click the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

// when the user click outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none"
}

// when the user starts to type something inside the password field
myInput.onkeyup = function() {
    let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid")
        letter.classList.add("valid")
    } else {
        letter.classList.remove("valid")
        letter.classList.add("invalid")
    }
    // validate capital letters
    let upperCaseLetter = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetter)) {
        capital.classList.remove("invalid")
        capital.classList.add("valid")
    } else {
        capital.classList.remove("valid")
        capital.classList.add("invalid")
    }
    // Validate numbers
    let numbers = /[0-9]/g
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid")
        number.classList.add("valid")
    } else {
        number.classList.remove("valid")
        number.classList.add("invalid")
    }
    // validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid")
        length.classList.add("valid")
    } else {
        length.classList.remove("valid")
        length.classList.add("invalid")
    }
}
