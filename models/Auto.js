var Vehiculo = require('./Vehiculo');

module.exports = class Auto extends Vehiculo
{ 
    constructor(puertas, marca, modelo, precio)
    {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }
}
