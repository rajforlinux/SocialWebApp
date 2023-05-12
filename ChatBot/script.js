const chatHistoryList = document.getElementById("chat-history-list");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", function() {
  const userMessage = userInput.value;
  if (userMessage) {
    const userMessageElement = document.createElement("li");
    userMessageElement.innerText = userMessage;
    userMessageElement.classList.add("chat-message");
    userMessageElement.classList.add("chat-sent");
    chatHistoryList.appendChild(userMessageElement);
    userInput.value = "";

    setTimeout(function() {
      const botMessage = getBotResponse(userMessage);
      const botMessageElement = document.createElement("li");
      botMessageElement.innerText = botMessage;
      botMessageElement.classList.add("chat-message");
      botMessageElement.classList.add("chat-received");
      chatHistoryList.appendChild(botMessageElement);
    }, 500);
  }
});

function getBotResponse(userMessage) {
  const botResponses = {
    "hey": "Hello there!",
    "hello": "Hi!",
    "how are you": "I'm doing well, thank you for asking.",
    "what is your name": "My name is ChatBot.",
    "what can you do": "I can answer your questions and help you with simple tasks.",
    "bye": "Goodbye! Have a nice day."
  };

  const lowerCaseMessage = userMessage.toLowerCase();
  if (lowerCaseMessage in botResponses) {
    return botResponses[lowerCaseMessage];
  } else {
    return "I'm sorry, I didn't understand your question.";
  }
}
