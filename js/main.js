//elements - declaring variables
var textbox = document.getElementById('textbox');
var sendBtn = document.getElementById('sendBtn');
// references to container
var chatContainer = document.getElementById('chatContainer');
var userName = ""; // user name input

//regular expression for letters ONLY
const regex = /^[a-zA-Z]+$/;

var user = { message: "", counter: 0 };
// ^^ global variable - stores users latest message

//parts of coding integrated and learnt from Udemy Javascript course
chatbotSendMessage("Hey there, what's your name?");

let options = [
    {},
    { number: 1, choice: "1", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('1')>Careers in CS</button>" },
    { number: 2, choice: "2", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('2')>Opportunities</button>" },
    { number: 3, choice: "3", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('3')>Resources</button>" },
    { number: 4, choice: "4", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('4')>Skills in CS</button>" },
    { number: 5, choice: "5", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('5')>Women in Tech</button>" },

];

function chatbotSendMessage(messageText) {

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>Chatbot: </span>" +
        "<span style=" + "margin-top:10px; padding:10px" + ">" + messageText + "</span>";

    messageElement.animate([{ easing: "ease-in", opacity: 0.3 }, { opacity: 1 }], { duration: 1500 }); // message animations
    // parse text 
    chatContainer.appendChild(messageElement);

    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText) {

    // end user messages function // stylesheet
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>You: </span>" +
        "<span style=" + "margin-top:10px; padding:10px" + ">" + messageText + "</span>";

    messageElement.animate([{ easing: "ease-in", opacity: 0.3 }, { opacity: 1 }], { duration: 1500 }); // message animations

    // parse text 
    chatContainer.appendChild(messageElement);

    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;

}

function userOptionSelection(messageText) {
    let userChoice = parseInt(messageText.trim()); // store in var/convert string to int/and trim any spaces from user choice
    // console.log(messageText);
    // console.log(userChoice);

    switch (userChoice) {

        case 1:
            sendMessage('Careers in CS');
            break; // brk each time to get out of switch 
        case 2:
            sendMessage('Opportunities');
            break;
        case 3:
            sendMessage('Resources');
            break;

        case 4:
            sendMessage('Skills in Computer Science');
            break;

        case 5:
            sendMessage('Women in Tech');
            break;
        default:               // if user choices matches nothing 
            alert("Please choose a valid option");  // 1/2/3 choice option error
            chatbotSendMessage("Please choose a valid number");// option error in chat
    }

    // console.log(user);
}

function optionsSelection() {

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    for (let i = 1; i < options.length; i++) {
        messageElement.innerHTML += "<br>" + // += add previous choice and apend next one // break line with br tag
            "<span style=" + "margin-top:10px; padding:10px" + ">" + options[i].number + " - " + "" + "</span>"
            + options[i].buttonClicked;
    }

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 2000 });
    chatContainer.appendChild(messageElement);     // parse text - string to int

}

sendBtn.addEventListener('click', function (e) {
    let messageText = textbox.value.trim();
    userName = messageText;

    if (userName != "") {

        if (isNaN(userName)) { // if username not a number - execute this

            sendMessage(messageText);
            textbox.value = "";
            chatbotSendMessage("Hi " + userName + ", I'm WITbot !");
            chatbotSendMessage("Here to help, pick an option:");
            optionsSelection();

        }

        else {
            alert('please enter a name');
        }

    }

    else if (textbox.value == "") {
        alert('Please type in a message');

    } else {

        let messageText = textbox.value.trim();
        user.message = messageText;
        sendMessage(messageText);
        textbox.value = "";

        userOptionSelection(messageText);

    }
});

textbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        let messageText = textbox.value.trim();
        userName = messageText;

        if (userName != "") {
            console.log(isNaN(userName));

            if (isNaN(userName)) { // if username not a number - execute this

                sendMessage(messageText);
                textbox.value = "";
                chatbotSendMessage("Hi " + userName + ", I'm WITbot");
                chatbotSendMessage("Here to help, pick an option:");
                optionsSelection();
            }

            else {
                alert('please enter a name');

            }
        }
        else if (textbox.value == "") {
            alert('Please type in a message'); // display alert message for no blanks - user XP better

        } else {

            let messageText = textbox.value.trim(); // trim for spaces
            user.message = messageText; // for processing user message 
            sendMessage(messageText);
            textbox.value = ""; //message box to be empty after sending text

            userOptionSelection(messageText);

        }

    }


});