function szoveg(){
    let szoveg = document.getElementById("minta-szoveg").value
    if(szoveg == ""){
        document.getElementById("hiba-szoveg").innerHTML = "A mintaszöveg nem lehet üres!"
    }
    else if(szoveg == " "){
        document.getElementById("hiba-szoveg").innerHTML = "Nem lehet csak szóköz!!"
    }
    else{
        document.getElementById("szoveg").innerHTML = szoveg
        document.getElementById("hiba-szoveg").innerHTML = ""

    }
}
function betumeret(){
    let meret = document.getElementById("font-size").value
    document.getElementById("szoveg").style.fontSize = meret + "pt"
}
function betuszin(){
    let szin = document.getElementById("font-color").value
    document.getElementById("szoveg").style.color = szin
}
function hatterszin(){
    let hatterszin = document.getElementById("background-color").value
    document.getElementById("megjelenites").style.backgroundColor = hatterszin
}

function alaphelyzet(){
 
    document.getElementById("minta-szoveg").value = "Árvíztűrő tükörfúrógép"
    document.getElementById("font-size").value = 16
    document.getElementById("font-color").value = "#000000"
    document.getElementById("background-color").value = "#FFFFFF"
    let szoveg = document.getElementById("minta-szoveg").value
    let meret = document.getElementById("font-size").value
    let szin = document.getElementById("font-color").value
    let hatterszin = document.getElementById("background-color").value

    document.getElementById("szoveg").innerHTML = szoveg
    document.getElementById("szoveg").style.fontSize = meret + "pt"
    document.getElementById("szoveg").style.color = szin
    document.getElementById("megjelenites").style.backgroundColor = hatterszin
}



let kedvencek = []
let id = 1

function add(){
    let szoveg = document.getElementById("minta-szoveg").value
    let meret = document.getElementById("font-size").value
    let szin = document.getElementById("font-color").value
    let hatterszin = document.getElementById("background-color").value

    if(szoveg !== "" && meret !== 0)
    kedvencek.push({"id:": id, "szoveg": szoveg, "meret": meret, "szin": szin, "hatter": hatterszin})
    id++
    console.log(kedvencek)
}

function kiir(){
    document.getElementById("kedvenc").innerHTML = kedvencek[0].szoveg
    document.getElementById("kedvenc").style.color = kedvencek[0].szin
    document.getElementById("kedvenc").style.fontSize = kedvencek[0].meret + "px"
    document.getElementById("kedvencek-div").style.backgroundColor = kedvencek[0].hatterszin

}
