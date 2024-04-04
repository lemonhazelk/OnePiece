
const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");



botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = desselecionarBotao(botao);

        botaoSelecionado.classList.remove("selecionado");

        desselecionarPersonagem();

        personagens[indice].classList.add("selecionado");

    });
});
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao(botao) {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botao.classList.add("selecionado");
    return botaoSelecionado;
}

