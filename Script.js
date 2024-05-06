function display(val) {
    document.getElementById("output-area").value += val;
}
function clearScreen() {
    document.getElementById("output-area").value = "";
}
function equalClick() {
    var text = document.getElementById("output-area").value;
    var result = eval(text);
    document.getElementById("output-area").value = result;
}
function deleteNumber () {
    let text = document.getElementById("output-area").value;
    let result = text.slice(0, -1);
    document.getElementById("output-area").value = result;
}
