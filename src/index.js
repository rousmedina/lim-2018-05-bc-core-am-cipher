const offset = document.getElementById('key');
const string = document.getElementById("inputText")

const btncipher=()=>{ 
    document.getElementById("resultado").value=cipher.encode(offset.value,string.value);
}
document.getElementById("btncipher").addEventListener("click",btncipher);

const btndecipher=()=>{ 
    document.getElementById("resultado").value=cipher.decode(offset.value,string.value);
}
document.getElementById("btndecipher").addEventListener("click",btndecipher);
