const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedorNumerico");
const contenedor = document.querySelector(".contenedorParrafo");
const resultado = document.querySelector(".contenedorResultado .textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    const cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

const btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.addEventListener("click", () => {
    const contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        console.log("Texto copiado al portapapeles");
    });
});






