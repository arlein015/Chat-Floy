// message-engine.js
const input = document.getElementById('chat-input');
const button = document.getElementById('send-trigger');
const container = document.getElementById('messages-container');

export function displayMessage(text, type) {
    const div = document.createElement('div');
    div.classList.add('message', type);
    div.innerText = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

button.onclick = () => {
    if (input.value.trim() !== "") {
        displayMessage(input.value, 'sent');
        input.value = "";
    }
};

input.onkeypress = (e) => {
    if (e.key === 'Enter') button.click();
};
