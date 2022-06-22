
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

  //  scroll top
  let span = document.querySelector(".top");

window.onscroll = function () {
   console.log(this.scrollY);
   if (this.scrollY >= 1000) {
    span.classList.add("show");
   } else {
    span.classList.remove("show");
  }
  
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  