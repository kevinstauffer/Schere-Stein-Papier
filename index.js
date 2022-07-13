const Auswahl = ["Schere ✂️", "Stein 🪨", "Papier 📑"]
let punkteKevin = 0
let punkteComputer = 0
let punkteUnentschieden = 0
let punkteStandOverAll = (punkteKevin + ' / ' + punkteComputer + ' / ' + punkteUnentschieden)

function pressButton(kevinSymbol) {
    document.getElementById("kevin").innerHTML = kevinSymbol;
    let computerSymbol = Auswahl[Math.floor(Math.random() * 3)]
    document.getElementById("computer").innerHTML = computerSymbol;
    if (kevinSymbol === computerSymbol) {
        document.getElementById("gewinner").innerHTML = "Unentschieden";
        punkteUnentschieden += 1
        let punkteStandOverAll = (punkteKevin + ' / ' + punkteComputer + ' / ' + punkteUnentschieden)

        document.getElementById('PunkteStand').innerHTML = punkteStandOverAll
        console.log(punkteStandOverAll)
        console.log(punkteUnentschieden)



    } else if (kevinSymbol === 'Stein 🪨' && computerSymbol === 'Schere ✂️') {
        document.getElementById("gewinner").innerHTML = "🏆 Kevin gewinnt";
        punkteKevin += 1
        let punkteStandOverAll = (punkteKevin + ' / ' + punkteComputer + ' / ' + punkteUnentschieden)

        document.getElementById('PunkteStand').innerHTML = punkteStandOverAll

    } else if (kevinSymbol === 'Schere ✂️' && computerSymbol === 'Papier 📑') {
        document.getElementById("gewinner").innerHTML = "🏆 Kevin gewinnt";
        punkteKevin += 1
        let punkteStandOverAll = (punkteKevin + ' / ' + punkteComputer + ' / ' + punkteUnentschieden)

        document.getElementById('PunkteStand').innerHTML = punkteStandOverAll

    } else if (kevinSymbol === 'Papier 📑' && computerSymbol === 'Stein 🪨') {
        document.getElementById("gewinner").innerHTML = "🏆 Kevin gewinnt";
        punkteKevin += 1
        let punkteStandOverAll = (punkteKevin + ' / ' + punkteComputer + ' / ' + punkteUnentschieden)

        document.getElementById('PunkteStand').innerHTML = punkteStandOverAll

    } else if (computerSymbol === 'Stein 🪨' && kevinSymbol === 'Schere ✂️') {
        document.getElementById("gewinner").innerHTML = "😞 Computer gewinnt";
        punkteComputer += 1
        let punkteStandOverAll = (punkteKevin + ' / ' + punkteComputer + ' / ' + punkteUnentschieden)

        document.getElementById('PunkteStand').innerHTML = punkteStandOverAll

    } else if (computerSymbol === 'Schere ✂️' && kevinSymbol === 'Papier 📑') {
        document.getElementById("gewinner").innerHTML = "😞 Computer gewinnt";
        punkteComputer += 1
        let punkteStandOverAll = (punkteKevin + ' / ' + punkteComputer + ' / ' + punkteUnentschieden)

        document.getElementById('PunkteStand').innerHTML = punkteStandOverAll

    } else if (computerSymbol === 'Papier 📑' && kevinSymbol === 'Stein 🪨') {
        document.getElementById("gewinner").innerHTML = "😞 Computer gewinnt";
        punkteComputer += 1
        let punkteStandOverAll = (punkteKevin + ' / ' + punkteComputer + ' / ' + punkteUnentschieden)

        document.getElementById('PunkteStand').innerHTML = punkteStandOverAll

    }
}