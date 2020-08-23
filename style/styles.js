$(document).ready(function () {
  $("#buynow").click(function () {
    $("#checkoutModal").modal("show");
  });
});

$(document).ready(function () {
  $("#buynow1").click(function () {
    $("#checkoutModal").modal("show");
  });
});

// contact us image slide in js
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs((slideIndex += n))
}
function showDivs(n) {
  var i;
 
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
    x[slideIndex - 1].style.display ="block";
}

// contact us form validation
const contactForm = document.getElementById("contactForm");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

email.addEventListener("keyup", function (event) {
  isValidEmail = email.checkValidity();

  if (isValidEmail) {
    okButton.disabled = false;
  } else {
    okButton.disabled = true;
  }
});

submit.addEventListener("click", function (event) {
  contactForm.submit();
});
