//PRODUCTOS ----------------------------------------------------------------------------------------------------
fetch("../js/productos.json")
    .then( (response) => {
        return response.json();
    }).then( (productos) => {
        productos.forEach((producto)=>{
            //localStorage
            function agregarLS (producto) {
             const productos = localStorage.getItem("productos");
             let productosArray = [];

            //operador AND
             productos !== null && (productosArray = JSON.parse(productos));

             productosArray.push(producto);
             localStorage.setItem("productos", JSON.stringify(productosArray));
            }

            const div = document.createElement("div");
    
            const productoNombre = document.createElement("h3");
            productoNombre.innerText = producto.nombre;
    
            const productoPrecio = document.createElement("li");
            productoPrecio.innerText = producto.precio;
    
            const btnLS = document.createElement("button");
            btnLS.addEventListener("click", () =>{
                agregarLS(producto);
            });
            btnLS.innerHTML = "añadir a LS";
            div.append(productoNombre, productoPrecio, btnLS)
    
            contenedor.append(div);
        });
});
