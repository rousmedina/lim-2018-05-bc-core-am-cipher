window.cipher = {

    encode:(offset,string) => {
        let complet = '';
        for (i = 0; i < string.length; i++) {
          let toAscii = string.charCodeAt(i);
          if (toAscii >= 65 && toAscii <= 90) {
            complet += String.fromCharCode((toAscii - 65 + parseInt(offset)) % 26 + 65); // Mayus

          } 
          else if (toAscii >= 97 && toAscii <= 122) {
            complet += String.fromCharCode((toAscii - 97 + parseInt(offset)) % 26 + 97); // Minus
        }
    else if (toAscii == 32){
        complet += "";
     }
   }        
 return complet;    
     }
      
      decode:(offset,string) => {
        let complet = '';
        for (i = 0; i < inpuTxt.length; i++) {
          let toAscii = inpuTxt.charCodeAt(i);
          if (toAscii >= 65 && toAscii <= 90)
            newPhrase += String.fromCharCode((toAscii - 65 - offset + 26 * 2) % 26 + 65);
          else if (toAscii >= 97 && toAscii <= 122)
            newPhrase += String.fromCharCode((toAscii - 97 - offset + 26 * 2) % 26 + 97);
          else
     
      }
    }