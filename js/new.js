// import conversations from './convo.js';
var audio = new Audio('/assets/ping.mp3');

let currentConversation = null // default value
// 2 divs for CB and User seperate - into 1
// user = to switch between user and CB 

export function sendMessage(message, user = false, wait = 0) { // optional parameter - call SM without user message its set to false originally
    var wrapper = document.createElement('div'); // new div to take up width of container
    wrapper.style.display = 'flex';
    wrapper.style.width = '100%';
    wrapper.style.justifyContent = user ? 'flex-end' : 'flex-start'
    chatContainer.appendChild(wrapper);

    var messageElement = document.createElement('div');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
    messageElement.style.borderRadius = "15px";
    messageElement.style.display = 'flex';
    messageElement.style.justifyContent = 'flex-start';
    messageElement.style.alignItems = 'center';
    messageElement.style.width = 'fit-content';
    messageElement.style.backgroundColor = user ? "#D8D8D8" : "#dcd6f7";

    if (user) { // specific style just for user - move to right side
        messageElement.style.justifyContent = 'flex-end'
    }

    messageElement.innerHTML = message

    setTimeout(() => {
        messageElement.animate([{ easing: "ease-in", opacity: 0 }, { opacity: 1 }], { duration: 1500 }); // message animations
        wrapper.appendChild(messageElement)  // append DOM - called to add to HTML     // parse text 
        messageElement.scrollIntoView()
        if (!user) {
            audio.play()
        }
    }, wait)

    // chatContainer.scrollTop = chatContainer.scrollHeight;

}

export function showChatBubbles(bubbles) { // option bubbles wrapper
    const chatBubbleElement = document.getElementById("chatBubbles")
    removeAllChildNodes(chatBubbleElement) // remove previous bubbles
    bubbles.forEach((bubble) => {
        const element = document.createElement("div")
        element.innerHTML = withChatBubble(`<p>${bubble.text}</p>`)
        element.onclick = () => {
            sendMessage(withUserIcon(bubble.text), true)
            bubble.onClick(element)
        }
        chatBubbleElement.appendChild(element)
    })

}

export function changeConversation(conversation) {
    currentConversation = conversation
    sendMessage(currentConversation.render(currentConversation.message), false, 1500)
    showChatBubbles(currentConversation.chatBubbles)
}

export function removeAllChildNodes(parent) { // previous bubbles
    while (parent.firstChild) { // FC is true, remove it, and replace with parent option
        parent.removeChild(parent.firstChild)
    }
}

export function withChatbotIcon(render) { // design span for bot
    return `<img src="assets/img/logo-transparent.png" width="30px"
    alt="chatbot logo"><span style="padding-right: 5px; padding-left: 5px;">WITbot:</span><span>${render}</span>`
}

export function withUserIcon(text) { // design span for user 
    return `<span style="padding-right: 5px; padding-left: 5px;">You:</span><span>${text}</span>`
    // + `<img src="assets/img/user-icon.png" width="20px"
    // alt="user logo">`
}

export function withChatBubble(text) { // bubble options
    return `<div class="chatBubble">${text}</div>`
}

export function closeWindow() {
    if (confirm("Are you sure you want to end chat?")) {
        window.close();
    }
}

sendBtn.addEventListener('click', function (e) {
    if (textbox.value == "") {
        alert('Please type in a message'); // display alert message for no blanks - user XP better
    } else {
        let messageText = textbox.value.trim();

        sendMessage(messageText, true);
        textbox.value = '';

    }
});

textbox.addEventListener('keypress', function (e) {

    if (e.key === 'Enter') {

        if (textbox.value == "") {
            alert('Please type in a message'); // display alert message for no blanks - user XP better
        } else {
            let messageText = textbox.value.trim();

            sendMessage(withUserIcon(messageText), true);
            textbox.value = '';

        }
    }
});
