document.addEventListener("DOMContentLoaded", function () {
    function agregarAmigo() {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        const lista = document.getElementById("listaAmigos");
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombre;
        lista.appendChild(nuevoAmigo);
        input.value = "";
    }

    function sortearAmigo() {
        const lista = document.getElementById("listaAmigos");
        const amigos = lista.getElementsByTagName("li");

        if (amigos.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio].textContent;

        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    }

    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
