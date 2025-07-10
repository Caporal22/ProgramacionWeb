// Eventos
console.log(1);
window.addEventListener("load", function () {
  //load espera a que el JS y los archivos que dependen del HTML esten listos
  // This is the load event
  console.log(2);
  document.getElementById("heading").addEventListener("click", function () {
    console.log(3);
  });
});

window.onload = function () {
  // This is the onload event
  console.log(4);
  document.getElementById("heading").addEventListener("click", function () {
    console.log(3);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  // DOMContentLoaded espera a que el HTML este listo
  // This is the DOMContentLoaded event
  console.log(6);
  document.getElementById("heading").addEventListener("click", function () {
    console.log(3);
  });
});

console.log(5);

window.onscroll = function () {
  // This is the scroll event
  console.log("Scroll event triggered");
};
