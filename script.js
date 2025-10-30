const input = document.querySelector('#user-input');
const button = document.querySelector('#send-button');
const chatBody = document.querySelector('.chat-body');

function addMessage(message, sender){
    const messageDiv = document.createElement('div');
    messageDiv.classList.add( sender == 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerHTML = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

button.addEventListener('click', () => {
    const userMessage = input.value.trim();
    if (userMessage === '') return;
    addMessage(userMessage, 'user');
    input.value = '';

    setTimeout(() => {
        const botReply = getBotReply(userMessage.toLowerCase());
        addMessage(botReply, 'bot');

    }, 700);
});

function getBotReply(message){
    if (message.includes('menu')){
        return 'Nosso menu inclui cafes, cappucinos, lattes, bolos e croissants. O que voce gostaria?';
    } else if (message.includes('endereco')){
        return 'Estamos localizados na Rua Principal, 123. Venha nos visitar!';
    } else if (message.includes('horario')){
        return 'Estamos abertos de segunda a sexta, das 8h às 18h, e aos sábados, das 9h às 14h.';
    } else if (message.includes('pedido')){
        return 'Voce pode fazer o pedido aqui mesmo e recebera um codigo de referencia para levantar na nossa loja solicitar entrega';
    } else if(message.includes('cafe')) {
        return 'Temos diversos tipo de cafes como: cafe express, cafe com leite, cafe puro. Qual gostaria?';
    } else if(message.includes('cafes')) {
        return 'Temos diversos tipo de cafes como: cafe express, cafe com leite, cafe puro. Qual gostaria?';
    } else if(message.includes('express')) {
        return 'Você gostaria de um café express?';
    } else if(message.includes('sim')) {
        return 'Muito obrigado, o seu pedido está a ser processado, aguarde...';
    } else {
        return 'Desculpe, não entendi. Voce pode tentar: menu, endereço, horario ou pedido. Gostaria de falar com uma pessoa real?'
    }
}
