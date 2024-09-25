class Prestamo {
    constructor(monto, interes, plazo) {
        this.monto = monto || 0;
        this.interes = interes || 0;
        this.plazo = plazo || 0;
    }
    
    calcularCuota() {
        let cuota = (this.monto * this.interes) / (1 - Math.pow((1 + this.interes), -this.plazo));
        return cuota;
    }
}

function retornarInteres(destino) {
    switch (destino) {
        case 'Vehiculos':
            return 1.4987;
        case 'Construcciones':
            return 1.3875;
        case 'Viajes y vacaciones':
            return 1.6267;
        case 'Otros':
            return 1.8152;
        default:
            return 0;
    }
}






