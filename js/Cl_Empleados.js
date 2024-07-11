export default class Cl_Empleados {
    constructor (nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }   

    set Nombre (nombre) {
        this._nombre = nombre;
    }

    get Nombre () {
        return this._nombre;
    }
    set Sexo (sexo) {
        this._sexo = sexo;
    
    }

    get Sexo () {
        return this._sexo;1
    }
}