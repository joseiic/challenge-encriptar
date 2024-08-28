const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

let textinput = document.getElementById("input_text_encrypt");
let textoutput = document.getElementById("output_text_decrypt");
let botonCopiar = document.getElementById("button_copiar");
let contenedorPadre = document.querySelector(".result");
const botonLimpiar = document.getElementById('button_limpiar');

function encriptar() {
    let textoen = textinput.value.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        const [letra, reemplazo] = matrizCodigo[i];
        textoen = textoen.replaceAll(letra, reemplazo);
    }

    mostrarResultado(textoen);
}

function desencriptar() {
    let textodes = textinput.value.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        const [letra, reemplazo] = matrizCodigo[i];
        textodes = textodes.replaceAll(reemplazo, letra);
    }

    mostrarResultado(textodes);
}

function mostrarResultado(texto) {
    if (texto !== "") {
        contenedorPadre.classList.remove("no_texto");
        textoutput.value = texto;
        textoutput.innerHTML = texto;
    }
    textinput.focus();
}

function validadorInputs(e) {
    if (e.inputType === "deleteContentBackward") {
        return;
    }
    const valor = e.target.value;
    const regex = /^[a-z]/;

    if (!regex.test(valor)) {
        alert("Ingrese solo texto en minúsculas y sin caracteres especiales.");
        e.target.value = "";
    }
}

botonCopiar.addEventListener("click", () => {
    textoutput.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

botonLimpiar.addEventListener("click", () => {
    textinput.value = "";
    textoutput.value = "";
    contenedorPadre.classList.add("no_texto");
    textinput.focus();
});

textinput.addEventListener("input", validadorInputs);