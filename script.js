/*let nombre = prompt("Cual es tu nombre");
let apellido = prompt("Cual es tu apellido");
let resultado = nombre + " " + apellido;
console.log(resultado);*/

/*let numero = prompt("edad")
let resultado = parseInt(numero) + 2;
console.log(resultado);*/

/*const validarEdad = (edad) => {
    if (edad>=18){
        alert('poder entrar');
    }
    else {
        alert ('no podes entrar');
    }
    return
}
let edadPersona = parseInt(prompt('Ingrese su edad'));
validarEdad(edadPersona);*/

for (i=1;i<10;i++){

    document.write("<br><b>La tabla del " + i + ":</b><br>")
    
    for (j=1;j<10;j++) {
    
    document.write(i + " x " + j + ": ")
    
    document.write(i*j)
    
    document.write("<br>")
    
    }
    
    }
    

