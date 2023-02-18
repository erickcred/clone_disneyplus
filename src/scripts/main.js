document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".shows .shows__tabs button[data-tab-button]");
    
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