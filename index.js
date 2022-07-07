const Auswahl = ["Schere ✂️", "Stein 🪨", "Papier 📑"]

function pressButton(kevinSymbol) {
    document.getElementById("kevin").innerHTML = kevinSymbol;
    let computerSymbol = Auswahl[Math.floor(Math.random() * 3)]
    document.getElementById("computer").innerHTML = computerSymbol;
    if (kevinSymbol === computerSymbol) {
        document.getElementById("gewinner").innerHTML = "Unentschieden";

    } else if (kevinSymbol === 'Stein 🪨' && computerSymbol === 'Schere ✂️') {
        document.getElementById("gewinner").innerHTML = "🏆 Kevin gewinnt";
    } else if (kevinSymbol === 'Schere ✂️' && computerSymbol === 'Papier 📑') {
        document.getElementById("gewinner").innerHTML = "🏆 Kevin gewinnt";
    } else if (kevinSymbol === 'Papier 📑' && computerSymbol === 'Stein 🪨') {
        document.getElementById("gewinner").innerHTML = "🏆 Kevin gewinnt";
    } else if (computerSymbol === 'Stein 🪨' && kevinSymbol === 'Schere ✂️') {
        document.getElementById("gewinner").innerHTML = "😞 Computer gewinnt";
    } else if (computerSymbol === 'Schere ✂️' && kevinSymbol === 'Papier 📑') {
        document.getElementById("gewinner").innerHTML = "😞 Computer gewinnt";
    } else if (computerSymbol === 'Papier 📑' && kevinSymbol === 'Stein 🪨') {
        document.getElementById("gewinner").innerHTML = "😞 Computer gewinnt";
    }
}