const btn = document.getElementById('btn');
const input = document.getElementById('msg');
const display = document.getElementById('display');

btn.onclick = function() {
    if(input.value !== "") {
        display.innerHTML = "Tu as dit : " + input.value;
        input.value = "";
    }
};
