window.cipher = {
  encode : function (offset, string){
     let resultado = ""
     for (let i=0 ; i<string.length ; i++){
         
         let cambio = string.charCodeAt(i);
         if(cambio>=65 && cambio<=90){
         let cambio2 = (cambio-65+offset)%26 + 65;
         let cambio3 = String.fromCharCode(cambio2);
         resultado += cambio3}
         else if(cambio === 32){
           resultado += String.fromCharCode(32);
          }
        }
       return resultado;
  }
}

let caja1 = document.getElementById("entrada_para_cifrar");
let caja2 = document.getElementById("desplazamiento");
let caja3 = document.getElementById("salida_de_cifrado");
let button = document.getElementById("button_cifrar");
  button.addEventListener("click", function(){
  let valorDeLaCaja1 = caja1.value;
  let valorDeLaCaja2 = parseInt(caja2.value);
  let codigoCifrado = cipher.encode(valorDeLaCaja2 , valorDeLaCaja1)   
  caja3.innerHTML = codigoCifrado;
});

