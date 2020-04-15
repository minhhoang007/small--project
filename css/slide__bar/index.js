// alert("hello")
const toggler = document.querySelectorAll('.has-child')
console.log(toggler);

// el.forEach((e) => {
    
//     e.addEventListener("click", (el) => {
        
//         e.classList.toggle("menu-open")
//     })
// })

var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("menu-open");
    this.classList.toggle("menu-open");
  });
}
