let currentTab = 0; // current tab to be the first tab

showTab(currentTab); // Display the current tab

function showTab(n) {
     // This function will display the specified tab of the form...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
    // this will figure out which tab to display
    let x = document.getElementsByClassName("tab");
    // exit the function if any field in the current tab is invalid
    if (n === 1 && !validateForm()) return false;
    // hide the current tab
    x[currentTab].style.display = "none";
    // increase or decrease the curreant tab by 1
    currentTab = currentTab + n;
    // if you have reached the end of the form
    if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    // otherwise display the correct tab
    showTab(currentTab);
}

function validateForm() {
    // this is function deals with validation of the form fields
    let x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    console.log(y);
    // a loop that checks every input field in the current tab
    for (i = 0; i < y.length; i++) {
        // if a field is empty..
        if (y[i].value === "") {
            // add an "invalid" class to the field
            y[i].className += "invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // if the valid status is true, mark add the step as finish
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status 
}

function fixStepIndicator(n) {
    //this function removes the "active"
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace("active", "")
    }
    // and adds the "active " class to the current step
    x[n].className += " active";
}