// let loader = document.querySelector(".spinner");

// window.addEventListener("load",function () {

//     loader.style.display = "none";
// }); 



// var loader = document.querySelector(".spinner");
// window.addEventListener("onload", function() {
// loader.style.display = "None";
// });
function startLoader() {
    const loader = document.querySelector(".spinner");
  
    setTimeout(function() {
      loader.style.left = "0";
    }, 2500);
  
    window.addEventListener("DOMContentLoaded", function(event) {
      setTimeout(function() {
        loader.style.left = "100%";
        document.body.classList.remove("spinner");
      }, 3000);
    });
  }
  
  startLoader();
  