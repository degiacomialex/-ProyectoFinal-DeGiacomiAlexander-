const btnContratar = document.querySelector("button.button-contratar");

const spanMonto = document.querySelector("span.label-monto");
const spanDestino = document.querySelector("span.label-destino");
const spanTasa = document.querySelector("span.label-intereses");
const spanPlazo = document.querySelector("span.label-plazo");
const spanCuota = document.querySelector("span.label-cuota");
const spanTotalDevolver = document.querySelector("span.label-total");

function recuperarDeLS() {
    const datosDelPrestamo = JSON.parse(localStorage.getItem("DatosDelPrestamo"));

    spanMonto.textContent = "$ " + datosDelPrestamo.dinero.toFixed(2);
    spanDestino.textContent = datosDelPrestamo.destino;
    spanTasa.textContent = ((datosDelPrestamo.interes - 1) * 100).toFixed(2);
    spanPlazo.textContent = datosDelPrestamo.meses;
    spanCuota.textContent = "$ " + datosDelPrestamo.cuota.toFixed(2);
    spanTotalDevolver.textContent = "$ " + (datosDelPrestamo.meses * datosDelPrestamo.cuota).toFixed(2);
}

btnContratar.addEventListener("click", () => {
    Swal.fire({
        title: "¡Listo!",
        text: "Nos pondremos en contacto a la brevedad. ¡Gracias por confiar en nosotros!",
        icon: "success"
    });
});

recuperarDeLS();








