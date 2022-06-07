const contenedorProductos = document.getElementById(contenedor);

fetch("../js/productos.json")
    .then( (response) => {
        return response.json();
    }).then( (productos) => {
        productos.forEach((producto)=>{
            //localStorage
            localStorage.clear();
            function agregarLS (producto) {
             const productos = localStorage.getItem("productos");
             let productosArray = [];

            //operador AND
             productos !== null && (productosArray = JSON.parse(productos));

             productosArray.push(producto);
             localStorage.setItem("productos", JSON.stringify(productosArray));
            }

            const ul = document.createElement("ul");
    
            const li1 = document.createElement("li");
            li2.innerText = producto.nombre;
    
            const li2 = document.createElement("li");
            li3.innerText = producto.precio;
    
            const button = document.createElement("button");
            button.addEventListener("click", () =>{
                agregarLS(producto);
            });
            button.innerHTML = "añadir";
            ul.append(li1, li2, button)
    
            contenedor.append(ul);
        });
});
