"use strict"
/**
 * @file Aplicación para la gestión de un parking
 * @author Andrés Garrido Pérez
 * @version  0.1
 */

/** 
 * @class Parking
 * @property {number} capacidad Número de coches que puede haber en el parking
 * @prop {Array}tunelLavado Lista de coche para lavar
 * @prop {Array} coches Lista de coches en el parking
 */
class Parking {
    /**
     * @param {number} capacidad 
     * @param {}
     */
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.tunelLavado = [];
        this.coches = [];
    }
    /**
     * @description MeterCoche mete coche en el parking
     * @param {Object} coche coche que metemos en el parking
     * @return {number} -1 parking lleno, 0 ok
     */
    MeterCoche(coche) {
        if (this.capacidad > 0) {
            if (coche.lavado == true) {
                this.tunelLavado.push(coche.matricula);
            } else {
                this.coches.push(coche.matricula);
            }
        } else {
            return -1;
        }
        return 0;
    }
    /**
     * @description Nos devuelve "true" (coche en el parking) o "false" (no coche en el parking)
     * @param {String} matricula coche a buscar
     * @returns {Boolean}
     */
    BuscarCoche(matricula) {
        if (this.coches.indexOf(matricula) >= 0) {
            return true;
        } else {
            if (this.tunelLavado.indexOf(matricula) >= 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}
let parking = new Parking(2);
let coche1 = {
    matricula: "G3456745",
    lavado: true
}
console.log(parking.MeterCoche(coche1));
console.log(parking);
console.log(parking.BuscarCoche("G3456745"));
console.log("salir");