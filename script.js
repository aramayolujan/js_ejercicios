//Calcular precio final de un valor ingresado , agregandole IVA y aplicando un descuento//


const suma  = (a,b) => a + b
const multiplicar = (a,b) => a * b
const iva   = x => x * 0.21


let precioProducto =  parseInt(prompt('ingresar precio producto'));

//Descuento del 30% sobre el precio del producto//
let descuento = 0.70 

let precioFinal= multiplicar(suma(precioProducto, iva(precioProducto)), descuento) 

console.log(precioFinal)



