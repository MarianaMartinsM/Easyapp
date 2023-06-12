const sunIcon = document.getElementById("icon-sun");
const moonIcon = document.getElementById("icon-moon");

sunIcon.addEventListener("click", function() {
  sunIcon.style.display = "none";
  moonIcon.style.display = "inline";
  document.body.classList.add("dark-mode");
});

moonIcon.addEventListener("click", function() {
  moonIcon.style.display = "none";
  sunIcon.style.display = "inline";
  document.body.classList.remove("dark-mode");
});
