/**
 * Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)
Cantidad de hombres que trabajan en la empresa: 3
Porcentaje de mujeres que trabajan en la empresa: 25%
 */

import Cl_Empresa from './Cl_Empresa.js';
import Cl_Empleados from './Cl_Empleados.js';

let e1 = new Cl_Empleados ('Mary', 'F');
let e2 = new Cl_Empleados ('Jose', 'M');
let e3 = new Cl_Empleados ('Carlos', 'M');
let e4 = new Cl_Empleados ('Pedro', 'M');

let e = new Cl_Empresa();
e.procesar(e1);
e.procesar(e2);
e.procesar(e3);
e.procesar(e4);

let salida = document.getElementById('salida');

salida.innerHTML = `
La cantidad de hombres que trabajan en la empresa es ${e.cntHombres()} 
<br> El porcentaje de mujeres que trabajan en la empresa es ${e.porcentajeMujeres()}%`