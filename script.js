const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function atualizarIndicadores() {

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    if(dots[current]){
        dots[current].classList.add("active");
    }
}

function mostrarSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    atualizarIndicadores();
}

function trocarBanner(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    mostrarSlide(current);
}

// CLIQUE NAS BOLINHAS
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        current = index;
        mostrarSlide(current);

    });

});

mostrarSlide(0);

setInterval(trocarBanner, 5000);


// Espera a página carregar
document.addEventListener("DOMContentLoaded", () => {

    // Mostra apenas a seção Explorar ao abrir o site
    trocarSecao("explorar", document.querySelector(".abas button"));

});

function trocarSecao(secaoId, botao) {

    // Esconde todas as seções
    const secoes = document.querySelectorAll(".secao");

    secoes.forEach(secao => {
        secao.style.display = "none";
    });

    // Mostra a seção escolhida
    document.getElementById(secaoId).style.display = "block";

    // Remove o botão ativo
    const botoes = document.querySelectorAll(".abas button");

    botoes.forEach(btn => {
        btn.classList.remove("active");
    });

    // Ativa o botão clicado
    botao.classList.add("active");
}