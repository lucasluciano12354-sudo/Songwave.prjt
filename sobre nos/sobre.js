/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revelarElementos() {

    const alturaTela = window.innerHeight;

    reveals.forEach((elemento) => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < alturaTela - 120) {

            elemento.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revelarElementos);
window.addEventListener("load", revelarElementos);


/* ==========================================
   BARRA DE PROGRESSO
========================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const altura =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progresso = (scroll / altura) * 100;

    progressBar.style.width = progresso + "%";

});


/* ==========================================
   CONTADORES
========================================== */

const counters = document.querySelectorAll(".counter");

let contadorIniciado = false;

function iniciarContadores() {

    if (contadorIniciado) return;

    const secao = document.querySelector(".numeros");

    const topo = secao.getBoundingClientRect().top;

    if (topo < window.innerHeight - 120) {

        contadorIniciado = true;

        counters.forEach(counter => {

            const alvo = Number(counter.dataset.target);

            let valor = 0;

            const incremento = alvo / 80;

            const atualizar = () => {

                valor += incremento;

                if (valor < alvo) {

                    counter.innerText = Math.floor(valor);

                    requestAnimationFrame(atualizar);

                } else {

                    counter.innerText = alvo;

                }

            }

            atualizar();

        });

    }

}

window.addEventListener("scroll", iniciarContadores);


/* ==========================================
   EFEITO PARALLAX
========================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    hero.style.backgroundPositionY =
        window.scrollY * 0.4 + "px";

});


/* ==========================================
   EFEITO 3D NOS CARDS
========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 18;
        const rotateX = ((y / rect.height) - 0.5) * -18;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/* ==========================================
   EFEITO NAS CAIXAS DOS VALORES
========================================== */

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.style.transition = ".35s";

    });

});


/* ==========================================
   TÍTULO DA ABA
========================================== */

const tituloOriginal = document.title;

window.addEventListener("blur", () => {

    document.title = "🎵 Volte para o MusicFy";

});

window.addEventListener("focus", () => {

    document.title = tituloOriginal;

});


/* ==========================================
   HERO ENTRA COM SUAVIDADE
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});