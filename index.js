//Arranque de servidor

const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end(imprimirDatos());
    exit();
});

server.listen(8000);

//Funcionalidades

var Auto = require('./models/Auto');
var Moto = require('./models/Moto');
var StringBuilder = require('./models/StringBuilder');
const { type } = require('os');
const { exit } = require('process');

const listado = [];

const cargarLista = () => {

    var autoUno = new Auto(4, 'Peugeot', 206, 200000.00);
    var motoUno = new Moto(125, 'Honda', 'Titan', 60000.00);
    var autoDos = new Auto(5, 'Peugeot', 208, 250000.00);
    var motoDos = new Moto(160, 'Yamaha', 'YBR', 80500.55);

    listado.push(autoUno, motoUno, autoDos, motoDos);
}

const getVehiculoMasCaro = () =>{

    let _masCaro = undefined;

    for(let item of listado){

        if(_masCaro == undefined)
            _masCaro = item;

        if(item.precio > _masCaro.precio)
            _masCaro = item;
    }


    return _masCaro
}

const getVehiculoMasBarato = () =>{

    let _masBarato = undefined;

    for(let item of listado){

        if(_masBarato == undefined)
            _masBarato = item;

        if(item.precio < _masBarato.precio)
            _masBarato = item;
    }


    return _masBarato

}

const filtrarVehiculo = (letra) =>{

    let vehiculoFiltrado;
    let auxLetra = new String(letra)

    for(let item of listado)
    {
        let aux = new String(item.modelo);

        if(aux.toLowerCase().includes(auxLetra.toLowerCase()))
        {
            vehiculoFiltrado = item;
            break;
        }
    }


    return vehiculoFiltrado;

}

const getOrderList = () =>{

    let orderList = listado;

    orderList.sort((a, b) => {

        if(a.precio < b.precio)
            return 1;
        else
            return -1;
    })

    return orderList;
}

const imprimirDatos = () => {

    cargarLista();

    let masCaro = getVehiculoMasCaro();
    let masBarato = getVehiculoMasBarato();
    let vehiculoFiltrado = filtrarVehiculo('y');

    let sb = new StringBuilder();

    for(let vehiculo of listado)
    {
        if(vehiculo instanceof Auto)
           sb.append(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas ${vehiculo.puertas} // Precio: $${vehiculo.precio.toFixed(2)}`)
        else
           sb.append(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Cilindrada ${vehiculo.cilindradas}c // Precio: $${vehiculo.precio.toFixed(2)}`)
    }

    sb.append('\n=============================\n');

    sb.append(`Vehiculo mas caro: ${masCaro.marca} ${masCaro.modelo}`);
    sb.append(`Vehiculo mas barato: ${masBarato.marca} ${masBarato.modelo}`);
    sb.append(`VehIculo que contiene en el modelo la letra 'Y': ${vehiculoFiltrado.marca} ${vehiculoFiltrado.modelo} $${vehiculoFiltrado.precio}`);

    sb.append('\n=============================\n');
    sb.append('Vehiculos ordenados por precio de mayor a menos:');

    let orderList = getOrderList();

    for(let item of orderList)
        sb.append(`${item.marca} ${item.modelo}`);

    
    console.log(sb.string);

    return sb.string

}