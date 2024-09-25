// LOGICA DE LA APLICACIÓN
function guardarEnLS(dinero, meses, interes, cuota, destino) {
    let datosDelPrestamo = {
        dinero: dinero,
        meses: meses, 
        interes: interes,
        cuota: cuota,
        destino: destino
    }

    localStorage.setItem("DatosDelPrestamo", JSON.stringify(datosDelPrestamo));
}

function calcularPrestamo() {
    let dineroSolicitado = parseInt(document.getElementById("montoPrestamo").value);
    let plazoEnMeses = parseInt(document.getElementById("plazoPago").value);
    let interesAplicado = retornarInteres(document.getElementById("selectDestino").value);

    const prestamo = new Prestamo(dineroSolicitado, interesAplicado, plazoEnMeses);
    let cuotaMensual = prestamo.calcularCuota();

    guardarEnLS(dineroSolicitado, plazoEnMeses, interesAplicado, cuotaMensual, document.getElementById("selectDestino").value);

    location.href = "cotizacion.html";
}

document.querySelector("button.button-calcular").addEventListener("click", () => {
    calcularPrestamo();
});







