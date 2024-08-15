const matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
const textoUsuario = document.querySelector('.texto-usuario')
const textoSistema = document.querySelector('.texto-sistema')
const btnCopiar = document.querySelector('.btn-copiar')
const mensagemErro = document.querySelector('.informacao-erro')

function btnCriptografar() {
    let textoCriptografrado = criptografar(textoUsuario.value)
    textoSistema.value = textoCriptografrado
    if(textoCriptografrado){
        textoSistema.style.backgroundImage = 'none'
        btnCopiar.style.display = 'inline-block'
        mensagemErro.style.display = 'none'
    }
}

function btnDescriptografar() {
    let textoDescriptografado = descriptografar(textoUsuario.value)
    textoSistema.value = textoDescriptografado
    textoSistema.style.backgroundImage = ''
    if(textoDescriptografado){
        textoSistema.style.backgroundImage = 'none'
        btnCopiar.style.display = 'inline-block'
        mensagemErro.style.display = 'none'
    }
}

function criptografar(texto) {
    texto = texto.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return texto
}

function descriptografar(texto) {
    texto = texto.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(texto.includes(matrizCodigo[i][1])){
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return texto

}

function copiar() {
    let copiarTexto = textoSistema;
    copiarTexto.select();
    document.execCommand("copy");
    copiarTexto.value = ''
}