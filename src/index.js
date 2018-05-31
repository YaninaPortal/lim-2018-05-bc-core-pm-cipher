

let caja1 = document.getElementById("entrada_para_cifrar")
let caja2 = document.getElementById("desplazamiento")
let caja3 = document.getElementById("salida_de_cifrado")
let button = document.getElementById("button_cifrar")


    button.addEventListener("click", function(){
    let valorDeLaCaja1 = caja1.value;
    let valorDeLaCaja2 = parseInt(caja2.value);
    let codigoCifrado = cipher.encode(valorDeLaCaja2 , valorDeLaCaja1)   
    caja3.innerHTML = codigoCifrado;
    });



let cajaEntrada = document.getElementById("entrada_para_decifrar")
let cajaSalida = document.getElementById("salida_para_decifrar")
let button2 = document.getElementById("button_decifrar")

    // button2.addEventListener("click", function(){
    // let valorDeLaCaja11 = caja11.value;
    // console.log(valorDeLaCaja11)
    // });

