const listaAmigos = [];

const imputAmigo = document.getElementById ("amigo");
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");

function agregarAmigo() {
    if(!imputAmigo.value){
        alert("No puede estar vacio; porfavor ingrese un nombre.");
    }else{
        if(listaAmigos.includes(imputAmigo.value)){
            alert(`El nombre ${imputAmigo.value} ya esta en la lista`);
        }else{
            listaAmigos.push(imputAmigo.value);
            ulListaAmigos.innerHTML += `<li>${imputAmigo.value}</li>`;
            imputAmigo.value = "";
        }
    }
};

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
};