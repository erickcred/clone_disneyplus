document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".shows .shows__tabs button[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");
    const heroSection = document.querySelector(".hero");
    const alturaHero = heroSection.clientHeight;
    
    // Sessão de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(button) {
            const abaAlvo = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            hideTabs();
            aba.classList.add("shows__list--is-active");
            
            hideButtons();
            button.target.classList.add("shows__tabs__button--is-active");
        });
    }

    // Sessão FAQ acordion
    questions.forEach(function(questionItem) {
        questionItem.addEventListener("click", abreOuFechaResposta)
    });

    window.addEventListener("scroll", function() {
        const posisaoAtual = window.scrollY;
        if (posisaoAtual < alturaHero) {
            ocultaElementosHeader()
        } else {
            exibeElementosHeader()
        }
    });
});

function hideTabs() {
    const tabsContainer = document.querySelectorAll(".shows ul[data-tab-id]");
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shows__list--is-active");
    }
}

function hideButtons() {
    const buttons = document.querySelectorAll(".shows .shows__tabs button[data-tab-button]");
    buttons.forEach(function(button) {
        button.classList.remove("shows__tabs__button--is-active")
    });
}

function abreOuFechaResposta(elemento) {
    const classe = "faq__questions__item--is-open";
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function ocultaElementosHeader() {
    const header = document.querySelector(".header");
    header.classList.add("header--is-hidden");
}
function exibeElementosHeader() {
    const header = document.querySelector(".header");
    header.classList.remove("header--is-hidden");
}