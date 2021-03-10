var textbox = document.getElementById('textbox');
var sendBtn = document.getElementById('sendBtn');
var chatContainer = document.getElementById('chatContainer');

const regex = /[0-9.,/|;<>"'+-\s@?=:;!()]/; //regular expression for letters ONLY
var promptt = prompt("Please enter your name:");

var userName = '';
var finished = false;

if (promptt != "" && !regex.test(promptt)) {
    userName = promptt.trim();
    console.log(userName);
}

var user = { message: "", counter: 0 };
// ^^ global variable - stores users latest message

//parts of coding integrated and learnt from Udemy Javascript course
chatbotSendMessage("Hi " + userName + "! I'm WITbot")


function chatbotSendMessage(messageText) {

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    
    messageElement.innerHTML = `<img src="assets/img/logo-transparent.png" width="30px"
    alt="chatbot logo">` + "<span>WITbot: </span>" +
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

    messageElement.innerHTML = `<img src="assets/img/user-icon.png" width="20px"
    alt="user logo">` + "<span>You: </span>" +
        "<span style=" + "margin-top:10px; padding:10px" + ">" + messageText + "</span>";

    messageElement.animate([{ easing: "ease-in", opacity: 0 }, { opacity: 1 }], { duration: 1500 }); // message animations

    // parse text 
    chatContainer.appendChild(messageElement);

    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;

}
// menu options start
function optionsSelection() {
    let options = [
         {},
         { number: 1, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('1')>Careers in CS</button>" },
        //  { number: 2, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('2')>Opportunities</button>" },
         { number: 2, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('2')>Resources</button>" },
         { number: 3, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('3')>Skills in CS</button>" },
         // { number: 5, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=userOptionSelection('5')>Women in Tech</button>" },
     
     ];
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
function userOptionSelection(messageText) {
    let userChoice = parseInt(messageText); // store in var/convert string to int/and trim any spaces from user choice
    // console.log(messageText);
    // console.log(userChoice);

    switch (userChoice) {

        case 1:
            sendMessage('Careers in CS');
            chatbotSendMessage("");
            break; // brk each time to get out of switch 
        // case 2:
        //     sendMessage('Opportunities');
        //     break;
        case 2:
            sendMessage('Resources');
            initialiseOptions();
            break;

        case 3:
            sendMessage('Skills in Computer Science');
            chatbotSendMessage("");
            break;

        // case 5:
        //     sendMessage('Women in Tech');
        //     break;
        // default:               // if user choices matches nothing 
        //     alert("Please choose a valid option");  // 1/2/3 choice option error
        //     chatbotSendMessage("Please choose a valid number");// option error in chat
    }
    // console.log(user);
}
//menu options end

// resources button links
function initialiseOptions() {
    let resourceOptions = [
        {},
        { number: 1, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('1')>Online coding classes</button>" },
        { number: 2, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('2')>Workshops</button>" },
        { number: 3, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('3')>STEM organisations</button>" },
        { number: 4, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('4')>Technology keynote speakers</button>" },
        { number: 5, buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=resourcesSelection('5')>Inspirational women in Tech</button>" },
    ];

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
    chatbotSendMessage("What resources would you like access to?");

    for (let i = 1; i < resourceOptions.length; i++) { //increment
        messageElement.innerHTML += "<br>" +
            "<span style=" + "margin-top:10px; padding:10px" + ">" + "" + "</span>"
            + resourceOptions[i].buttonClicked;
    }

    messageElement.animate([{ easing: "ease-in", opacity: 0 }, { opacity: 1 }], { duration: 1500 });
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;

}

function resourcesSelection(messageText) {

    let userChoice = parseInt(messageText);

    switch (userChoice) {

        case 1:
            sendMessage("Online coding classes");
            chatbotSendMessage("Learn new coding languages and expand your skills " + userName + "!")
            confirm("Opening a new site");
            window.open('https://www.codecademy.com/');
            window.open('https://adadevelopersacademy.org/');
            window.open('https://www.womenwhocode.com/');
            window.open('https://skillcrush.com/');

            break;
        case 2:
            sendMessage("Workshops");
            chatbotSendMessage(userName + ", by attending workshops you can gain a lot of insight into the industry")
            confirm("Opening a new site");
            window.open('https://www.codecademy.com/');
            window.open('https://www.whymaker.co/all_workshops.html');
            break;

        case 3:
            sendMessage("STEM organisations");
            chatbotSendMessage("There are many sources of support for you " + userName)
            chatbotSendMessage("Have a read of what individuals like you can offer the industry")
            confirm("Opening a new site");
            window.open('https://www.stem.org.uk/');
            window.open('https://www.womeninstem.co.uk/');
            window.open('https://stemettes.org/');
            window.open('https://www.wisecampaign.org.uk/wise-network/women-in-stem-networks/');
            break;

        case 4:
            sendMessage("Technology keynote speakers");
            chatbotSendMessage("Attend these virtual events " + userName + ', you will be well informed in all careers and paths in the technology industry best suited to you')
            confirm("Opening a new site");
            window.open('https://www.jla.co.uk/inspirational-speakers-women-stem-science-technology-engineering-mathematics/');
            window.open('https://www.stemwomen.co.uk/blog/2020/08/stem-women-to-host-inspiring-two-day-virtual-tech-careers-event-this-september');
            window.open('https://www.speakerscorner.co.uk/listing/technology-speakers');
            window.open('https://techsavvywomen.net/keynotes/');
            break;

        case 5:
            sendMessage("Inspirational women in Tech");
            chatbotSendMessage(userName + ', these amazing women have helped shape the industry, so that you can come and shape the future!')
            confirm("Opening a new site");
            window.open('https://www.everywoman.com/my-development/learning-areas/articles/inspirational-women-history-technology-edition');
            window.open('https://www.brainbridge.be/news/top-11-inspirational-women-in-tech-past-and-present');
            window.open('https://www.pocket-lint.com/gadgets/news/151345-the-most-inspiring-women-in-tech');
            window.open('https://www.womenintech.co.uk/10-famous-women-technology-changed-world');
            window.open('https://bigthink.com/technology-innovation/women-in-tech');

            break;
    }
    finished = true;
}
//resources button links ends


sendBtn.addEventListener('click', function (e) {
    if (textbox.value == "") {
        alert('Please type in a message'); // display alert message for no blanks - user XP better
    } else {
        let messageText = textbox.value.trim();

        sendMessage(messageText);
        textbox.value = '';
        if (finished) return

        setTimeout(() => {
            chatbotSendMessage("Here to support you, click an option to get started:")
            optionsSelection();
        }, 1500);

        resourcesSelection();

        userOptionSelection(messageText);
    }
});

textbox.addEventListener('keypress', function (e) {

    if (e.key === 'Enter') {

        if (textbox.value == "") {
            alert('Please type in a message'); // display alert message for no blanks - user XP better
        } else {
            let messageText = textbox.value.trim();

            sendMessage(messageText);
            textbox.value = '';
            if (finished) return

            setTimeout(() => {
                chatbotSendMessage("Here to support you, click an option to get started:")
                optionsSelection();
            }, 1500);

            resourcesSelection();

            userOptionSelection(messageText);
        }
    }
});
