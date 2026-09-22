const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

function fugir() {
    const larguraMaxima = window.innerWidth - botaoNao.offsetWidth;
    const alturaMaxima = window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * larguraMaxima;
    const y = Math.random() * alturaMaxima;

    botaoNao.style.position = "fixed";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";
}

// No computador: foge quando passar o mouse
botaoNao.addEventListener("mouseover", fugir);

// No celular: foge quando tentar tocar
botaoNao.addEventListener("touchstart", function(event) {
    event.preventDefault();
    fugir();
});

// Caso consiga clicar
botaoNao.addEventListener("click", fugir);

// Quando clicar em "Sim"
botaoSim.addEventListener("click", function() {
    document.querySelector(".container").innerHTML = `
        <div style="font-size: 55px; margin-bottom: 15px;">
            ❤️🥹❤️
        </div>

        <h2>EU SABIA KKKKK ❤️</h2>

        <p style="font-size: 18px; margin-top: 15px;">
            Então agora não tem mais volta 😌
        </p>

        <p>
            Nosso date está oficialmente aceito ❤️
        </p>
    `;
});