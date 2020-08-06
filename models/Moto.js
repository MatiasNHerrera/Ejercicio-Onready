var Vehiculo = require('./Vehiculo');

module.exports = class Moto extends Vehiculo
{ 
    constructor(cilindrada, marca, modelo, precio)
    {
        super(marca, modelo, precio);
        this.cilindradas = cilindrada;
    }
}
