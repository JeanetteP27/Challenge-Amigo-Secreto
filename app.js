const listaAmigos = []; /* Almacena nombres de los amigos*/

const imputAmigo = document.getElementById ("amigo"); /* Trae valor del amigo actual*/
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");

/* Funcion para agregar amigo a la lista*/
function agregarAmigo() {
    if(!imputAmigo.value){ /* En caso de ingresar un valor vacio */
        alert("No puede estar vacio; porfavor ingrese un nombre.");
    }else{
        if(listaAmigos.includes(imputAmigo.value)){ /* Comprueba que no se repita el nombre*/
            alert(`El nombre ${imputAmigo.value} ya esta en la lista`);
        }else{ /* Registra el amigo en la lista*/
            listaAmigos.push(imputAmigo.value);
            ulListaAmigos.innerHTML += `<li>${imputAmigo.value}</li>`;
            imputAmigo.value = "";
        }
    }
};

/* Funcion para sortear a un amigo de la lista*/
function sortearAmigo() {
    if(listaAmigos.length == 0){ /* Comprueba que no este vacia la lista*/
        alert("No hay amigos disponibles; porfavor ingrese un nombre.");
    }else{ /* Calcula al amigo de manera random*/
        const random = Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[random];
        ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; /* Expresa el resultado*/
    }
};