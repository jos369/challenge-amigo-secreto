// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo(nombre) {
    // Agrega un nuevo amigo al array de amigos
    let nombreAmigo = document.getElementById("amigo");
    let amigo = nombreAmigo.value.trim();

    if (amigo === "") {
        alert("El campo no puede estar vacío");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("El amigo " + amigo + " ya existe en la lista");
        return;
    }

    amigos.push(amigo);
    nombreAmigo.value = "";

    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigo;
    listaAmigos.appendChild(nuevoAmigo);
}

function sortearAmigo() {
    // Lógica para sortear el amigo secreto
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo");
        return;
    }
    let amigosSorteados = [...amigos];
    let asignaciones = {};  // Objeto para almacenar las asignaciones

    for (let i = 0; i < amigos.length; i++) {
        let amigoActual = amigos[i];
        let posiblesAsignaciones = amigosSorteados.filter(a => a !== amigoActual);  // Filtrar para no asignarse a sí mismo

        if (posiblesAsignaciones.length === 0) {
            // Si no hay posibles asignaciones, reiniciar el proceso
            alert("No se pudo completar el sorteo. Inténtalo de nuevo.");
            return;
        }
        let asignacion = posiblesAsignaciones[Math.floor(Math.random() * posiblesAsignaciones.length)];
        asignaciones[amigoActual] = asignacion;
        amigosSorteados = amigosSorteados.filter(a => a !== asignacion);  // Remover la asignación para evitar duplicados
    }
    
    let resultado = document.getElementById("resultado");

    let html = "<h3>Resultados del Sorteo:</h3>";
    for (const dador in asignaciones) {
        if (Object.prototype.hasOwnProperty.call(asignaciones, dador)) {
            const receptor = asignaciones[dador];
            html += `<li>${dador} → ${receptor}</li>`;
        }
    }
    resultado.innerHTML = html;
}