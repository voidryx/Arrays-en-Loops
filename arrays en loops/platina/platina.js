// voorbeeld passagiers
let passagiers = [
    { naam: "Leo", saldo: 20, img: "#" },
    { naam: "Nicole", saldo: 15, img: "#" }
];

let output = document.getElementById("output");

let soundIn = document.getElementById("soundIn");
let soundOut = document.getElementById("soundOut");

// toon passagiers met afbeelding
function toon() {
    output.innerHTML = "<h3>👥 Passagiers</h3>";

    passagiers.forEach(p => {
        output.innerHTML += `
            <div>
                <img src="${p.img}" width="50"><br>
                ${p.naam} - €${p.saldo}
            </div><hr>
        `;
    });
}

// check-in
function checkIn() {
    soundIn.play();

    passagiers[0].saldo -= 2;

    output.innerHTML = "🚪 Check-in gelukt! Nieuw saldo: €" + passagiers[0].saldo;

    toon();
}

// check-out
function checkUit() {
    soundOut.play();

    passagiers[1].saldo -= 2;

    output.innerHTML = "🚪 Check-out gelukt! Nieuw saldo: €" + passagiers[1].saldo;

    toon();
}

// bus animatie
function startBus() {
    let bus = document.getElementById("bus");

    bus.style.left = "300px";

    output.innerHTML = "De bus rijdt de route...";
}