// API

const boton = document.querySelector("#btn_notificacion");

boton.addEventListener("click", () => {
  Notification.requestPermission().then(
    (
      resultado //then (nativo de Notification)
    ) => console.log(`El resultado es ${resultado}`)
  );
}); //Registrar un evento al id btn_notificacion

// bloquear : denied
// aceptado : granted

// Mostrar notificacion
if (Notification.permission == "granted") {
  new Notification("Esta es una notificación", {
    icon: "images/zerotwo-cute.png",
    body: "Un sticker",
  });
}
