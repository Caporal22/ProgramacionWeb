const metodoPago = "tarjeta";

switch (metodoPago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  default:
    console.lot("Aún no has pagado plebe");
    break;
  case "efectivo":
    console.log("Pagaste en efectivo");
    break;
}
