// message-engine.js
const input = document.getElementById('chat-input');
const btn = document.getElementById('send-trigger');
const container = document.getElementById('messages-container');

function postMessage() {
    const text = input.value.trim();
    if (text !== "") {
        const div = document.createElement('div');
        div.classList.add('message', 'sent');
        div.innerText = text;
        container.appendChild(div);
        
        input.value = "";
        container.scrollTop = container.scrollHeight;
    }
}

btn.onclick = postMessage;

input.onkeypress = (e) => {
    if (e.key === 'Enter') postMessage();
};
