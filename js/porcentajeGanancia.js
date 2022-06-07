const resta  = (a,b) => a - b

let btnGanancia = document.getElementById("botonGanancia");
btnGanancia.onclick = () => {
    if (document.getElementById("primerPrecio").value == 0 && document.getElementById("precioVenta").value == 0){
        //utilice la libreria sweetAlert para mostrar la advertencia 
        Swal.fire({
            title: 'Error!',
            text: 'Ingrese valores mayores a 0',
            icon: 'error',
            confirmButtonText: 'aceptar'
          })
    }else if (document.getElementById("primerPrecio").value == 0){
        Swal.fire({
            title: 'Error!',
            text: 'Ingrese un precio mayor a 0',
            icon: 'error',
            confirmButtonText: 'aceptar'
          })
    }else if (document.getElementById("precioVenta").value == 0){
        Swal.fire({
            title: 'Error!',
            text: 'Ingrese una ganancia mayor a 0',
            icon: 'error',
            confirmButtonText: 'aceptar'
          })
    }else  {
        let precioGanancias1 = document.getElementById("primerPrecio").value;
        let precioGanancias2 = document.getElementById("precioVenta").value;
        let gananciaDelProducto = resta(precioGanancias2,precioGanancias1); 
        console.log(gananciaDelProducto);
        let resultadoMuestra2 = document.getElementById("resultadoMuestraGanancia");
        resultadoMuestra2.innerHTML = `<p>  La ganancia será de: $${gananciaDelProducto}</p>`
    } 
};