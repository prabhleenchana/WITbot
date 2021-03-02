//elements - declaring variables
var textbox = document.getElementById('textbox');
var sendBtn = document.getElementById('sendBtn');
// references to container
var chatContainer = document.getElementById('chatContainer');
var userName = ""; // user name input

//regular expression for letters ONLY
const regex = /[0-9.,/|;<>"'+-\s@?=:;!()]/;

var user = { message: "", counter: 0 };
// ^^ global variable - stores users latest message

//parts of coding integrated and learnt from Udemy Javascript course
chatbotSendMessage("Hey there, what's your name?");

let options = [
    {},
    { number: 1, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('1')>Careers in CS</button>" },
    { number: 2, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('2')>Opportunities</button>" },
    { number: 3, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('3')>Resources</button>" },
    { number: 4, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('4')>Skills in CS</button>" },
    // { number: 5, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('5')>Women in Tech</button>" },

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

    messageElement.animate([{ easing: "ease-in", opacity: 0 }, { opacity: 1 }], { duration: 1500 }); // message animations
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

    messageElement.animate([{ easing: "ease-in", opacity: 0 }, { opacity: 1 }], { duration: 1500 }); // message animations

    // parse text 
    chatContainer.appendChild(messageElement);

    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;

}
// menu options start
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
            initialiseOptions();
            break;

        case 4:
            sendMessage('Skills in Computer Science');
            break;

        case 5:
            sendMessage('Women in Tech');
            break;
        // default:               // if user choices matches nothing 
        //     alert("Please choose a valid option");  // 1/2/3 choice option error
        //     chatbotSendMessage("Please choose a valid number");// option error in chat
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
        messageElement.innerHTML += "<br>" + // break line with br tag
            "<span style=" + "margin-top:10px; padding:10px" + ">" + "" + "</span>"
            + options[i].buttonClicked;
    }

    messageElement.animate([{ easing: "ease-in", opacity: 0 }, { opacity: 1 }], { duration: 1500 });
    chatContainer.appendChild(messageElement);     // parse text - string to int

}
//menu options end

// resources button links
function initialiseOptions() {

    let resourceOptions = [
        {},
        { number: 1, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('1')>Online coding classes</button>" },
        { number: 2, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('2')>Workshops</button>" },
        { number: 3, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('3')>STEM sites</button>" },
        { number: 4, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('4')>Technology keynote speakers</button>" },
        { number: 5, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('5')>Inspirational women in Tech</button>" },
        { number: 6, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('6')>support groups</button>" },

    ];

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    for (let i = 1; i < resourceOptions.length; i++) { //increment
        messageElement.innerHTML += "<br>" +
            "<span style=" + "margin-top:10px; padding:10px" + ">" + "" + "</span>"
            + resourceOptions[i].buttonClicked;
    }

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;

}

function resourcesSelection(messageText) {

    let userChoice = parseInt(messageText.trim());

    switch (userChoice) {

        case 1:
            sendMessage("Online coding classes");
            confirm("opening a new site");
            chatbotSendMessage("")
            window.open('https://www.codecademy.com/');
            window.open('https://www.futurelearn.com/subjects/it-and-computer-science-courses/coding-programming');
            window.open('https://www.edx.org/learn/coding');
            window.open('https://www.coursera.org/courses?query=coding');
            
            break;
        case 2:
            sendMessage("Workshops");
            alert("opening a new site");
            window.open('https://www.whymaker.co/all_workshops.html');
            break;
        case 3:
            sendMessage("STEM sites");
            window.open('https://www.stem.org.uk/');
            break;
        case 4:
            sendMessage("Technology keynote speakers");
            window.open('https://www.stem.org.uk/');
            break;
        case 5:
            sendMessage("Inspirational women in Tech");
            window.open('https://www.stem.org.uk/');
            break;
        case 6:
            sendMessage("Support groups");
            window.open('https://www.stem.org.uk/');
            break;
    }

}
//resources button links ends

sendBtn.addEventListener('click', function (e) {
    let messageText = textbox.value.trim();
    userName = messageText;

    if (userName != "") {

        if (!regex.test(userName)) { // if username not a number - execute this

            sendMessage(messageText);
            textbox.value = "";
            setTimeout(() => {
                chatbotSendMessage("Hi " + userName + ", I'm WITbot")
            }, 1000);
            setTimeout(() => {
                chatbotSendMessage("Here to help, pick an option:")
                optionsSelection();
            }, 2000);
            resourcesSelection();


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

            if (!regex.test(userName)) { // if username not a number - execute this

                sendMessage(messageText);
                textbox.value = "";
                setTimeout(() => {
                    chatbotSendMessage("Hi " + userName + "! I'm WITbot")
                }, 1000);
                setTimeout(() => {
                    chatbotSendMessage("Here to help, pick an option:")
                    optionsSelection();
                }, 2000);
                resourcesSelection();

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

