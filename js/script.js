//Calcular precio final de un valor ingresado , agregandole IVA y un porcentaje de ganancias//
const suma  = (a,b) => a + b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b
const iva   = x => x * 0.21


//click boton

let boton = document.getElementById("botonPrecioResultado");
boton.onclick = () => {
    let precio1 = document.getElementById("precioInicial").value;
    let porcentaje1 = document.getElementById("porcentajeGanancia").value;
    let precioIva = suma(parseInt(precio1),iva(parseInt(precio1)))
    let precioGanancias = dividir(multiplicar(precioIva, parseInt(porcentaje1)),100)
    let precioFinal = suma(precioIva,precioGanancias); 
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<p>  El precio final del producto es de: ${precioFinal}</p>`;
    document.body.appendChild(contenedor);
};

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


//Agregar producto 
productos.push(new producto("Jean Amanda","jean"))

console.log(productos)



//Buscar por categorias
const $buscarCategoria = document.querySelector('#buscarCategoria');
const resultado = productos.filter ((el) => el.categoria.includes(buscarCategoria))

//evento
let input = document.getElementById("buscarCategoria");

input.addEventListener("input", () => {
    let valor = input.value;

    let buscarNombreCategoria = productos.filter((producto)=>{
        return producto.categoria.toLowerCase() == valor.toLowerCase();
    });

    console.log(buscarNombreCategoria);
});
