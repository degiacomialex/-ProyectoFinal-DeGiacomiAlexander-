// funciones para llamar a APIs de cotización de monedas o 
async function obtenerCotizaciones() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        mostrarCotizaciones(data.rates);
    } catch (error) {
        console.error('Error al obtener cotizaciones:', error);
    }
}

function mostrarCotizaciones(cotizaciones) {
    const contenedorCotizaciones = document.getElementById('cotizaciones');
    Object.keys(cotizaciones).forEach(moneda => {
        contenedorCotizaciones.innerHTML += `<p>${moneda}: ${cotizaciones[moneda]}</p>`;
    });
}

document.addEventListener('DOMContentLoaded', obtenerCotizaciones);









