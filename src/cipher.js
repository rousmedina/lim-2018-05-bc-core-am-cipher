window.cipher = {
  encode:(offset,string) => {
    let complet = '';
    for (let i = 0; i < string.length; i++) {

       // Convierte a ascii
      let toAscii = string.charCodeAt(i);
      // Condición y covierte nuevamente en letra
      if (toAscii >= 65 && toAscii <= 90) {
        complet += String.fromCharCode((toAscii - 65 + parseInt(offset)) % 26 + 65); // Mayus
      } else if (toAscii >= 97 && toAscii <= 122) {
        complet += String.fromCharCode((toAscii - 97 + parseInt(offset)) % 26 + 97); // Minus
      } else if (toAscii == 32) {
        complet += String.fromCharCode(toAscii);
      }
    }        

    //retornará la variable salidad
    return complet;    
  },

  decode:(offset,string) => {
    let complet = '';
    for (let i = 0; i < string.length; i++) {
      let toAscii = string.charCodeAt(i);
      if (toAscii >= 65 && toAscii <= 90) {
        complet += String.fromCharCode((toAscii + 65 - parseInt(offset)) % 26 + 65); // Mayus
      } else if (toAscii >= 97 && toAscii <= 122) {
        complet += String.fromCharCode((toAscii + 97 - parseInt(offset)-12) % 26 + 97); // Minus
      } else {
        complet += String.fromCharCode(toAscii);
      }
    }        
    return complet;    
  }
 // createCipherWithOffset
}
