let root = document.documentElement;
let color = 'black';
root.style.setProperty("--color", color);
function Black() {
    document.getElementById("img").src="images/converseN.png";
    document.getElementById("info").style.color = "white";
    document.getElementById("size").style.color = "white";
    document.getElementById("buton").style.color = "white";
    root.style.setProperty("--color", color);
}
function White() {
    document.getElementById("img").src="images/converseW.png";
    document.getElementById("info").style.color = "black";
    document.getElementById("size").style.color = "black";
    document.getElementById("buton").style.color = "black";
    let color = "white";
    root.style.setProperty("--color", color);

}
function Red() {
    document.getElementById("img").src="images/converseR.png";
    document.getElementById("info").style.color = "white";
    document.getElementById("size").style.color = "white";
    document.getElementById("buton").style.color = "white";
    let color = "red";
    root.style.setProperty("--color", color);
}
function Green() {
    document.getElementById("img").src="images/converseG.png";
    document.getElementById("info").style.color = "white";
    document.getElementById("size").style.color = "white";
    document.getElementById("buton").style.color = "white";
    let color = "green";
    root.style.setProperty("--color", color);
}