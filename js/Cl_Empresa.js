export default class Cl_Empresa {
    constructor () {
        this.empleados = 0;
        this.mujeres = 0;
        this.hombres = 0;
    }

procesar(p) {
    this.empleados++;
    if (p.sexo == 'M') {
        this.hombres++;
    } else if (p.sexo == 'F') {
        this.mujeres++;
    }
    
}   

cntHombres() {
    return this.hombres;
}

porcentajeMujeres() {
    return this.mujeres / this.empleados * 100;
}

    }