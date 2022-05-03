
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



