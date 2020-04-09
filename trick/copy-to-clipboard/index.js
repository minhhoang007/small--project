

function myFunction () {
    const copyText = document.querySelector("#myInput")

    copyText.select();
    copyText.setSelectionRange(0, 9999);

    document.execCommand("copy")

    alert("copied the text: " + copyText.value)
}

//full screen search
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }