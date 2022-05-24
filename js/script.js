fetch("/js/productos.json")
    .then( (response) => {
        return response.json();
    }).then( (productos) => {
    console.log(productos);
});


/*

//Calcular precio final de un valor ingresado , agregandole IVA y un porcentaje de ganancias//
const suma  = (a,b) => a + b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b
const iva   = x => x * 0.21


let btnPrecioResultado = document.getElementById("botonPrecioResultado");
btnPrecioResultado.onclick = () => {
    let precio1 = document.getElementById("precioInicial").value;
    let porcentaje1 = document.getElementById("porcentajeGanancia").value;
    let precioIva = suma(parseInt(precio1),iva(parseInt(precio1)))
    let precioGanancias = dividir(multiplicar(precioIva, parseInt(porcentaje1)),100)
    let precioFinal = suma(precioIva,precioGanancias); 
    let resultadoMuestra = document.getElementById("resultadoMuestra");
    resultadoMuestra.innerHTML = `<p>  El precio final del producto es de: ${precioFinal}</p>`;
};


//Agregar producto 
productos.push(new producto("Jean Amanda","jean", "$9.690.-"))
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


//JSON & storage
localStorage.clear();

function agregarLS (producto) {
    const productos = localStorage.getItem("productos");
    let productosArray = [];

    //operador AND
    productos !== null && (productosArray = JSON.parse(productos));

    productosArray.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosArray));


}

 const contenedorProductos = document.getElementById(contenedor);

    productos.forEach((producto)=>{
        const ul = document.createElement("ul");

        const li1 = document.createElement("li");
        li1.innerText = producto.nombre;

        const li2 = document.createElement("li");
        li2.innerText = producto.categoria;

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
    */