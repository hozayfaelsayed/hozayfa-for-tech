
 function startLoader() {
    const loader = document.querySelector(".spinner");
  
     setTimeout(function() {
       loader.style.left = "0";
     }, 3000);
  
     window.addEventListener("DOMContentLoaded", function(event) {
       setTimeout(function() {
         loader.style.left = "105%";
         document.body.classList.remove("spinner");
       }, 3500);
    });
   }
  
   startLoader();
  