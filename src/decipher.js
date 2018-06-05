window.cipher = {

  decode : function (offset, string){
    
    let resultado2 = ""
    for (let i=0 ; i<string.length ; i++){
      
       let cambioDecifrado = string.charCodeAt(i);
       if((cambioDecifrado>=65) && (cambioDecifrado<=90)){
       let cambio22 = (cambioDecifrado+65-parseInt(offset))%26 + 65;
       let cambio33 = String.fromCharCode(cambio22);
       resultado2 += cambio33;
       }
      else if((cambioDecifrado>=97) && (cambioDecifrado<=122)){
      let cambio22 = ((cambioDecifrado - 97 - parseInt(offset) + 26 *2 ) %26 )+ 97;
      let cambio33 = String.fromCharCode(cambio22);
      resultado2 += cambio33;
      }
      else if(cambioDecifrado === 32){
         resultado2 += String.fromCharCode(32);
      }
      
     }
    return resultado2;
   }
}
  
  let caja1 = document.getElementById("entrada_para_decifrar");
  let caja2 = document.getElementById("desplazamiento");
  let caja3 = document.getElementById("salida_de_decifrado");
  let buttondecifrar = document.getElementById("decifrar");
  
  buttondecifrar.addEventListener("click", function(){
      let valorDeLaCaja11 = caja1.value;
      let valorDeLaCaja22 = parseInt(caja2.value);
      let codigoDecifrado = cipher.decode(valorDeLaCaja22 , valorDeLaCaja11); 
      caja3.innerHTML = codigoDecifrado;
      });
  
  