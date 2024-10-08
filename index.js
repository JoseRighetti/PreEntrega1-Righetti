function mostrarProductos() {
    let catalogo = "Catalogo de productos: \n";
    catalogo += "1. Camiseta Argentina- $36.000 \n";
    catalogo += "2. Camiseta Barcelona- $34.000 \n";
    catalogo += "3. Camiseta Liverpool- $74.000 \n";
    catalogo += "4. Camiseta PSG- $39.000 \n";
    return catalogo;
}

function comprarProducto() {
    let total = 0;
    let seguirComprando = true;

    while(seguirComprando){
     let catalogo = mostrarProductos();
     let eleccion = prompt(
        catalogo +
        "que producto quieres comprar? Ingrese el numero o escriba 'salir' para finalizar"
        );


if(eleccion ===null || eleccion === ""){
    alert("No has ingresado un dato valido");
    continue;
}

if(eleccion === "salir") {
    break;
   }

   eleccion = parseInt(eleccion);

   if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
    alert("producto no valido, selecciona nuevamente");
    continue;
     }

   if(eleccion === 1) {
    total += 36.000;
    alert("Usted agrego Camiseta Argentina");

   } else if (eleccion === 2) {
    total += 34.000;
    alert("Usted agrego Camiseta Barcelona");

   } else if (eleccion === 3) {
    total += 74.000
    alert("Usted agrego Camiseta Liverpool");

    } else if (eleccion === 4) {
    total += 39.000;
    alert("Usted agrego Camiseta PSG");
    }

    seguirComprando = prompt(
        "¿quiere seguir comprando? (si/no)") === "si";
}

alert("Gracias por su compra. El total es ${total}");

}

comprarProducto();




