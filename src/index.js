<<<<<<< HEAD
const textencode = document.getElementById("Text-encode");
const textdecode = document.getElementById("text-decode");

const btncipher = document.getElementById("btn-cipher");
const btndecipher = document.getElementById("btn-decipher");

btn-cipher.addEventListener( "click" ,() => {
});
btn-decipher.addEventListener( "click" ,() => {
});


=======
const offset = document.getElementById('key');
const string = document.getElementById("inputText")
/* se llama al button-cipher cuando el mouse haga click y devuelve la función */
const btncipher=()=>{ 
    document.getElementById("resultado").value=cipher.encode(offset.value,string.value);
}
document.getElementById("btncipher").addEventListener("click",btncipher);

const btndecipher=()=>{ 
    document.getElementById("resultado").value=cipher.decode(offset.value,string.value);
}
document.getElementById("btndecipher").addEventListener("click",btndecipher);
>>>>>>> 5966493dc3a80514f3fdb71073f4dbaae0b1f066
