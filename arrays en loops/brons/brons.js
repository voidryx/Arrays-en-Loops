let songs = [
    "Blinding Lights - The Weeknd",
    "Shape of You - Ed Sheeran",
    "As It Was - Harry Styles",
    "Levitating - Dua Lipa",
    "Bad Guy - Billie Eilish",
    "Someone Like You - Adele"
];

let output = document.getElementById("output");

output.innerHTML += "<p>1e song: " + songs[0] + "</p>";

output.innerHTML += "<p>3e song (verzoeknummer): " + songs[2] + "</p>";

output.innerHTML += "<h3>Alle songs:</h3>";

songs.forEach(function(song, index) {
    output.innerHTML += "<p>" + (index + 1) + ". " + song + "</p>";
});