

// function para exibir a mensagem temporária de boas vindas
function exibirBoasVindas() {
    var quadradoMensagem = document.createElement('div');
    quadradoMensagem.className = 'mensagem-quadrado';
    quadradoMensagem.innerHTML = '<p>Bem-vindo ao nosso Pet Shop! Esperamos que você tenha uma ótima experiência.</p>';
    document.body.appendChild(quadradoMensagem);

    // Configurar um timeout para remover o quadrado após 5 segundos (5000 milissegundos)
    setTimeout(function () {
        quadradoMensagem.remove();
    }, 5000);

    // Exibir o quadrado
    quadradoMensagem.style.display = 'block';
}
exibirBoasVindas()