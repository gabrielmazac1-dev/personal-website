// ============================
// JavaScript pro moji stranku
// Gabriel Mazác, 2025
// ============================

// --- POZDRAV PODLE DENNI DOBY ---
// tady zjistim kolik je hodin a podle toho zobrazim pozdrav
var hodiny = new Date().getHours();
var pozdravText = "";

if (hodiny < 12) {
    pozdravText = "?? Dobré ráno, díky že se díváte!";
} else if (hodiny < 18) {
    pozdravText = "?? Dobrý den, díky že se díváte!";
} else {
    pozdravText = "?? Dobrý den, rád vás tu vidím!";
}

// vlozim pozdrav do stranky
document.getElementById("pozdrav").textContent = pozdravText;


// --- POCITADLO KLIKNUTI ---
// jednoduche pocitadlo - kdyz kliknu na tlacitko tak se cislo zvysi
var pocet = 0;
var tlacitko = document.getElementById("pocitadlo-btn");

tlacitko.addEventListener("click", function() {
    pocet = pocet + 1;
    tlacitko.textContent = "Klikni na me! (" + pocet + "×)";

    // po 10 kliknuti se zmeni text
    if (pocet == 10) {
        tlacitko.textContent = "Wow, už 10 kliknutí! ??";
    }
    // po 25 kliknuti dalsi zmena
    if (pocet == 25) {
        tlacitko.textContent = "To je " + pocet + "× - máte výdrž! ??";
    }
});


// --- ROK V PATICCE ---
// aby se rok v paticce sam aktualizoval a nemusel jsem to menit rucne
var rok = new Date().getFullYear();
document.getElementById("rok").textContent = rok;


// --- PLYNULE SCROLLOVANI ---
// kdyz kliknu na odkaz v menu tak to plynule sjede dolu
var odkazy = document.querySelectorAll('.menu a');

for (var i = 0; i < odkazy.length; i++) {
    odkazy[i].addEventListener("click", function(e) {
        e.preventDefault();
        var cilovy = document.querySelector(this.getAttribute("href"));
        if (cilovy) {
            cilovy.scrollIntoView({ behavior: "smooth" });
        }
    });
}
