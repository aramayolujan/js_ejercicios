//Calcular precio final de un valor ingresado , agregandole IVA y un porcentaje de ganancias//
const suma  = (a,b) => a + b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b
const iva   = x => x * 0.21


let btnPrecioResultado = document.getElementById("botonPrecioResultado");
btnPrecioResultado.onclick = () => {
   

    if (document.getElementById("precioInicial").value == 0 && document.getElementById("porcentajeGanancia").value == 0){
        //utilice la libreria sweetAlert para mostrar la advertencia 
        Swal.fire({
            title: 'Error!',
            text: 'Ingrese valores mayores a 0',
            icon: 'error',
            confirmButtonText: 'aceptar'
          })
    }else if (document.getElementById("precioInicial").value == 0){
        Swal.fire({
            title: 'Error!',
            text: 'Ingrese un precio mayor a 0',
            icon: 'error',
            confirmButtonText: 'aceptar'
          })
    }else if (document.getElementById("porcentajeGanancia").value == 0){
        Swal.fire({
            title: 'Error!',
            text: 'Ingrese una ganancia mayor a 0',
            icon: 'error',
            confirmButtonText: 'aceptar'
          })
    }else  {
        let precio1 = document.getElementById("precioInicial").value;
        let porcentaje1 = document.getElementById("porcentajeGanancia").value;
        let precioIva = suma(parseInt(precio1),iva(parseInt(precio1)))
        let precioGanancias = dividir(multiplicar(precioIva, parseInt(porcentaje1)),100)
        let precioFinal = suma(precioIva,precioGanancias); 
        let resultadoMuestra = document.getElementById("resultadoMuestra");
        resultadoMuestra.innerHTML = `<p>  El precio final del producto es de: $${precioFinal}</p>`
    } 

};