function pressButton(symbol) {
    document.getElementById("kevin").innerHTML = symbol;
    let computer = computerSpielt();
    document.getElementById("computer").innerHTML = computer;
    //
}

const Auswahl = ["schere", "stein", "papier"]

function computerSpielt() {
    let computersymbol = Auswahl[Math.floor(Math.random() * 2)]

    return computersymbol
}