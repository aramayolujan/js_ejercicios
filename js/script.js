const contenedorProductos = document.getElementById(contenedor);

fetch("../js/productos.json")
    .then( (response) => {
        return response.json();
    }).then( (productos) => {
        productos.forEach((producto)=>{
    
            const ul = document.createElement("ul");
    
            const li1 = document.createElement("li");
            li1.innerHTML = producto.imagen;
    
            const li2 = document.createElement("li");
            li2.innerText = producto.nombre;
    
            const li3 = document.createElement("li");
            li3.innerText = producto.precio;
    
            const button = document.createElement("button");
            button.addEventListener("click", () =>{
                agregarLS(producto);
            });
            button.innerHTML = "añadir";
            ul.append(li1, li2, li3, button)
    
            contenedor.append(ul);
        });
});





/*
//Buscar por nombre

const $buscarNombre = document.querySelector('#buscarNombre');
const resultado = productos.filter ((el) => el.nombre.includes(buscarNombre))
//evento
let input = document.getElementById("buscarNombre");
input.addEventListener("input", () => {
    let valor = input.value;
        let buscarNombreProducto = productos.filter((producto)=>{
            return producto.nombre.toLowerCase() == valor.toLowerCase();
        });
console.log(buscarNombreProducto);
});

localStorage.clear();
function agregarLS (producto) {
    const productos = localStorage.getItem("productos");
    let productosArray = [];

    //operador AND
    productos !== null && (productosArray = JSON.parse(productos));

    productosArray.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosArray));
}
*/