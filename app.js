function criptografarMsg() {
    let textoEntrada = document.getElementById('input-text').value;
    let textoCriptografado = textoEntrada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-message').innerText = textoCriptografado;
    document.querySelector('.btn.copy').style.display = 'block';
    document.getElementById('sub').innerText = '';
}

function descriptografarMsg() {
    let textoEntrada = document.getElementById('input-text').value;
    let textoDescriptografado = textoEntrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-message').innerText = textoDescriptografado;
}

function copiar() {
    let mensagemSaida = document.getElementById('output-message').innerText;
    
    let tempInput = document.createElement("textarea");
    tempInput.value = mensagemSaida;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    document.execCommand("copy");
   
    document.body.removeChild(tempInput);
    document.getElementById('output-message').innerText = '';   
}
