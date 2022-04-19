//Calcular precio final de un valor ingresado , agregandole IVA y un porcentaje de ganancias//
const suma  = (a,b) => a + b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b
const iva   = x => x * 0.21


//Pedido de datos
let precioProducto =  parseInt(prompt('ingresar precio producto'));
let gananciaProducto =  parseInt(prompt('ingresar porcentaje de ganancias del producto'));


//operaciones 
let precioIva = suma(precioProducto,iva(precioProducto))
let precioGanancias = dividir(multiplicar(precioIva, gananciaProducto),100)
let precioFinal = suma(precioIva,precioGanancias);
console.log(precioFinal);


//incorporar array



class producto {
    constructor(nombre, categoria) {
        this.nombre = nombre;
        this.categoria = categoria;
    }
}

const producto1 = new producto("Blazer Cler", "blazer")
const producto2 = new producto("Blazer Paul", "blazer")
const producto3 = new producto("Tapado Berlín", "tapado")
const producto4 = new producto("Tapado Belix", "tapado")
const producto5 = new producto("Camisa Boris", "camisa")
const producto6 = new producto("Camisa Queen", "camisa")

let productos = [ producto1 , producto2 , producto3 , producto4 , producto5 , producto6]


//Agrego productos 
productos.push(new producto("Jean Amanda","jean"))

console.log(productos)

