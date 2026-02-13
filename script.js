// ============================
// JavaScript pro mou stránku
// Gabriel Mazác, 2025
// =============================

// --- POZDRAV PODLE DENNÍ DOBY ---
// Zjistím, kolik je hodin a podle toho zobrazím pozdrav
var hodiny = new Date().getHours();
var pozdravText = "";

if (hodiny < 12) {
    pozdravText = "🌅 Dobré ráno, díky že se podíváte!";
} else if (hodiny < 18) {
    pozdravText = "🌤️ Dobrý den, díky že se podíváte!";
} else {
    pozdravText = "🌙 Dobrý večer, rád vás tu vidím!";
}

// Vložím pozdrav do stránky
document.getElementById("pozdrav").textContent = pozdravText;


// --- POČÍTADLO KLIKNUTÍ ---
// Jednoduché počítadlo – když kliknu na tlačítko, číslo se zvýší
var pocet = 0;
var tlacitko = document.getElementById("pocitadlo-btn");

tlacitko.addEventListener("click", function() {
    pocet = pocet + 1;
    tlacitko.textContent = "Klikni na mě! (" + pocet + "×)";

    // po 10 kliknutích se změní text
    if (pocet == 10) {
        tlacitko.textContent = "Wow, už 10 kliknutí! 🎉";
    }
    // po 25 kliknutích další změna
    if (pocet == 25) {
        tlacitko.textContent = "To je " + pocet + "× – máte výdrž! 💪";
    }
});


// --- ROK V PATIČCE ---
// Aby se rok v patičce sám aktualizoval a nemusel jsem to měnit ručně
var rok = new Date().getFullYear();
document.getElementById("rok").textContent = rok;


// --- PLYNULÉ SCROLLOVÁNÍ ---
// Když kliknu na odkaz v menu, tak to plynule sjede dolů
var odkazy = document.querySelectorAll('.menu a');

for (var i = 0; i < odkazy.length; i++) {
    odkazy[i].addEventListener("click", function(e) {
        e.preventDefault();
        var cilovyElement = document.querySelector(this.getAttribute("href"));
        if (cilovyElement) {
            cilovyElement.scrollIntoView({ behavior: "smooth" });
        }
    });
}
