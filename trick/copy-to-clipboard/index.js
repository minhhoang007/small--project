

function myFunction () {
    const copyText = document.querySelector("#myInput")

    copyText.select();
    copyText.setSelectionRange(0, 9999);

    document.execCommand("copy")

    alert("copied the text: " + copyText.value)
}