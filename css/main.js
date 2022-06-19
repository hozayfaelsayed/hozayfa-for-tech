//  window.addEventListener("load", function () {
//     var spinner = this.document.getElementById("sp");
//     this.document.body.style.overflow = "hidden";

//     setTimeout(function () {
//         spinner.style.display = "none";
//         document.body.style.overflow = "auto";
//     }, 5000);
//  });

//  $(window).on("load", function () {
//     $(".spinner").fadeOut('slow');
//  });
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#spinner").style.visibility = "visible";
    } else {
        document.querySelector(
          "#spinner").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};