const btn = document.getElementById("gerarBtn");
const player = document.getElementById("player");
const status = document.getElementById("status");
const promptInput = document.getElementById("prompt");

player.style.display = "none";

btn.addEventListener("click", () => {

    const prompt =
        document.getElementById("prompt")
        .value
        .toLowerCase();

    let musica =
        "Musicas.IA/Lofi.mp3";

    if (
        prompt.includes("triste")
    ) {
        musica =
        "Musicas.IA/Triste.mp3";
    }

    else if (
        prompt.includes("trap")
    ) {
        musica =
        "Musicas.IA/Trap.mp3";
    }

     else if (
        prompt.includes("r&b")
    ) {
        musica =
        "Musicas.IA/R&b.mp3";
    }

    else if (
        prompt.includes("romantica") ||
        prompt.includes("amor")
    ) {
        musica =
        "Musicas.IA/Romantica.mp3";
    }

    else if (
        prompt.includes("lofi") ||
        prompt.includes("estudar")
    ) {
        musica =
        "Musicas.IA/Lofi.mp3";
    }

 
    // Simulação da IA trabalhando
    status.innerText = "Analisando gênero musical...";

    setTimeout(() => {
        status.innerText = "Criando melodia...";
    }, 1000);

    setTimeout(() => {
        status.innerText = "Finalizando mixagem...";
    }, 2000);

    // Após 3 segundos, mostra o resultado
    setTimeout(() => {

        // Define a música escolhida
        player.src = musica;

        // Mostra o player
        player.style.display = "block";

        // Toca a música
        player.play();

        // Atualiza a mensagem
        status.innerText =
            "Música gerada com sucesso!";

    }, 3000);

});

const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

player.style.display = "none";

// Play e Pause
playBtn.addEventListener("click", () => {

    if (player.paused) {
        player.play();
        playBtn.innerText = "⏸";
    }

    else {
        player.pause();
        playBtn.innerText = "▶";
    }

});

// Atualiza a barra conforme a música toca
player.addEventListener("timeupdate", () => {

    const porcentagem =
        (player.currentTime / player.duration) * 100;

    progress.value = porcentagem;

});

// Permite arrastar a barra
progress.addEventListener("input", () => {

    const tempo =
        (progress.value / 100) * player.duration;

    player.currentTime = tempo;

});

// Quando a música acabar
player.addEventListener("ended", () => {

    playBtn.innerText = "▶";
    progress.value = 0;

});

player.addEventListener("timeupdate", () => {

    const porcentagem =
        (player.currentTime / player.duration) * 100;

    progress.value = porcentagem;

    progress.style.background =
        `linear-gradient(
            to right,
            #a855f7 0%,
            #a855f7 ${porcentagem}%,
            #444 ${porcentagem}%,
            #444 100%
        )`;

});