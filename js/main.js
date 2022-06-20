
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
  