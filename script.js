let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerE1 = document.getElementById("chatContainer");
let userInputE1 = document.getElementById("userInput");



function sendMsgToChatbot() {

    let userMsg = userInputE1.value;
    let msgContainerE1 = document.createElement("div");
    msgContainerE1.classList.add("msg-to-chatbot-container");
    chatContainerE1.appendChild(msgContainerE1);

    let userMsgE1 = document.createElement("span");
    userMsgE1.textContent = userMsg;
    userMsgE1.classList.add("msg-to-chatbot");
    msgContainerE1.appendChild(userMsgE1);

    userInputE1.value = "";
    getReplyFromChatbot();
}

function getReplyFromChatbot() {
    let noOfChatBotMsgs = chatbotMsgList.length;
    let chatBotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatBotMsgs) - 1];

    let msgContainerE1 = document.createElement("div");
    msgContainerE1.classList.add("msg-from-chatbot-container");
    chatContainerE1.appendChild(msgContainerE1);

    let chatBotMsgE1 = document.createElement("span");
    chatBotMsgE1.textContent = chatBotMsg;
    chatBotMsgE1.classList.add("msg-from-chatbot");
    msgContainerE1.appendChild(chatBotMsgE1);
}