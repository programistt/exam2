let sanagich = 0
let i = 0;
let input = document.querySelector("input");
let bir = document.querySelector(".bir");
let ikki = document.querySelector(".ikki");
let p = document.querySelector("p");

let savollar = ["20 + 20 = ?", "28 - 12 = ?", "8 * 2 = ?", "20 / 2 = ?"];
let javoblar = ["40", "16", "16", "10"];

bir.addEventListener("click", (event) => {  
    event.preventDefault();

    p.textContent = savollar[0]
});


ikki.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value === javoblar[i]) {
        sanagich = sanagich + 1;
    }

    i = i + 1;

    if (i === 4) {
        p.textContent = `Siz ${sanagich} savolga to'g'ri javob berdingiz`;
        input.value = "";
        return;
    }

    input.value = "";

    p.textContent = savollar[i];
});