const display = document.getElementById("result");

function set(num) {
    display.textContent += num.textContent;
}

function calc() {
    display.textContent = new Function("return " + display.textContent)();
}

function reset() {
    display.textContent = "";
}