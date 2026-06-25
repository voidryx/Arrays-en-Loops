// Output element
let output = document.getElementById("output");

// Herbruikbare functie om array te tonen
function toonArray(arr, titel) {
    output.innerHTML += "<h3>" + titel + "</h3>";

    for (let i = 0; i < arr.length; i++) {
        output.innerHTML += "<p>" + (i + 1) + ". " + arr[i] + "</p>";
    }
}

// shuffle functie
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// hoofd functie
function startBus() {

    output.innerHTML = "";

    // 1. 10 mensen in bus
    let bus = [
        "Ali", "Sofia", "Jasper", "Noah", "Emma",
        "Liam", "Mila", "Daan", "Yara", "Lucas"
    ];

    toonArray(bus, "Opdracht 1: 10 passagiers");

    // 2. iemand stapt in
    bus.push("Fatima");
    toonArray(bus, "Opdracht 2: iemand stapt in (Fatima)");

    // 3. 5e persoon stapt uit (index 4)
    bus.splice(4, 1);
    toonArray(bus, "Opdracht 3: 5e persoon stapt uit");

    // 4. shuffle
    shuffle(bus);
    toonArray(bus, "Opdracht 4: na 'barrel roll' (shuffled)");

    // 5. iedereen stapt uit (while loop)
    output.innerHTML += "<h3>Opdracht 5: iedereen stapt uit</h3>";

    while (bus.length > 0) {
        let persoon = bus.shift();
        output.innerHTML += "<p>🚪 " + persoon + " stapt uit. Nog in bus: " + bus.length + "</p>";
    }
}