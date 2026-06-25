// 1. Array met objecten (passagiers)
let passagiers = [
    {
        id: 163821,
        naam: "Leo Daams",
        saldo: 34,
        woonplaats: "Den Bosch",
        telefoon: "0612345678"
    },
    {
        id: 145032,
        naam: "Nicole Hops",
        saldo: 18,
        woonplaats: "Maastricht",
        telefoon: "0687654321"
    }
];

// output
let output = document.getElementById("output");

// functie om lijst te tonen
function toonPassagiers() {
    output.innerHTML = "<h3>📋 Passagierslijst</h3>";

    passagiers.forEach(p => {
        output.innerHTML += `
            <p>
            <strong>${p.naam}</strong><br>
            ID: ${p.id}<br>
            Saldo: €${p.saldo}<br>
            Woonplaats: ${p.woonplaats}<br>
            Tel: ${p.telefoon}
            </p><hr>
        `;
    });
}

// check-in (saldo omlaag)
function checkIn() {
    let p = passagiers[0]; // Leo
    p.saldo -= 2;

    output.innerHTML = `${p.naam} heeft ingecheckt. Nieuw saldo: €${p.saldo}`;
}

// check-uit (saldo omlaag)
function checkUit() {
    let p = passagiers[1]; // Nicole
    p.saldo -= 2;

    output.innerHTML = `${p.naam} heeft uitgecheckt. Nieuw saldo: €${p.saldo}`;
}

// nieuwe passagier toevoegen
function voegToe() {
    passagiers.push({
        id: 999999,
        naam: "Fatima Ali",
        saldo: 25,
        woonplaats: "Utrecht",
        telefoon: "0611122233"
    });

    output.innerHTML = "Nieuwe passagier toegevoegd!";
}

// passagier verwijderen (opzeggen)
function verwijder() {
    passagiers.pop(); // laatste eruit

    output.innerHTML = "Passagier verwijderd uit systeem!";
}