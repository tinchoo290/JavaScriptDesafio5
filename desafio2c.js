function descuento (precio , estado){
    if ( estado == "jubilado" || "JUBILADO"){
        let descuentoPrecio = precio * 0.50;
        return descuentoPrecio;
    }
    else if (estado == "desempleado" || "DESEMPLEADO"){
        let descuentoPrecio = precio * 0.05;
        return descuentoPrecio;
    }
}
function iva (precio){
    let iva = precio *0.21 ;
    return iva
}

let estado = prompt("ingrese su condición: JUBILADO, EMPLEADO O desempleado");
let precio = parseInt(prompt("ingrese el valor del producto"));
let resultado = ( precio - descuento(precio , estado)) + iva (precio);


if ( estado == "empleado" || "EMPLEADO"){
    resultado = precio + iva (precio)
}
else {
    resultado = ( precio - descuento(precio , estado)) + iva (precio);

}
document.write ("El precio que usted debe pagar por ser " + estado + " es de " + resultado );
alert("YA PUEDE VIASUALIZAR SU IMPORTE A PAGAR")