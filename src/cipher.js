window.cipher = {
  encode : function (offset, string){
     var resultado = ""
     for (let i=0 ; i<string.length ; i++){
         
         let cambio = string.charCodeAt(i);
         let cambio2 = (cambio-65+offset)%26 + 65;
         let cambio3 = String.fromCharCode(cambio2);
         resultado += cambio3
       }
       return resultado;
  },

  decode : function (offset, string){

     var resultado2 = ""
     for (let i=0 ; i<string.length ; i++){
       
        let cambioDecifrado = string.charCodeAt(i);
        let cambio22 = (cambioDecifrado-65 -offset)%26 +65;
        let cambio33 = String.fromCharCode(cambio22);
        resultado2 += cambio33
      }
     return resultado2;
    }
};
