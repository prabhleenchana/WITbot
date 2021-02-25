
//elements - declaring variables
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
// reference to container
var chatContainer = document.getElementById('chatContainer');

var user = { message: "", counter: 0 };
// ^^ global variable - stores users latest message

//coding integrated and learnt from Udemy Javascript course

var questionsToAsk = [
    { "question": "Hi there ! I'm WITbot", "answer": "" },
    { "question": "What's your name?", "answer": "" },
    { "question": "What area would you like more insight into?", "answer": "" },
   
];

let options = [
    {},
    { number: 1, choice: "1", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=restaurantResponseToUser('1')>Careers in CS</button>" },
    { number: 2, choice: "2", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=restaurantResponseToUser('2')>Opportunities</button>" },
    { number: 3, choice: "3", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=restaurantResponseToUser('3')>Resources</button>" },
    { number: 4, choice: "4", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=restaurantResponseToUser('4')>Skills in CS</button>" },
    { number: 5, choice: "5", buttonClicked: "<button style= 'margin:5px; color:white; background:gray' onClick=restaurantResponseToUser('5')>Women in Tech</button>" },

];

askQuestion();
showMenu();
// chatbotSendMessage("Hi, I'm WITbot! Here to help ");
// chatbotSendMessage("Please pick an option: ");
// showMenu(); // chatbot 4

// chat asks questions
function askQuestion() {


    if (questionsToAsk.length > user.counter) {
         setTimeout(function () {

              chatbotSendMessage(questionsToAsk[user.counter].question);
              user.counter++;
         }, 1000);


         console.log(questionsToAsk[user.counter - 1]);
    }

}

function chatbotSendMessage(messageText) {


    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>Chatbot: </span>" +
        "<span style=" + "margin-top:10px; padding:10px" + ">" + messageText + "</span>";

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 }); // message animations
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

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 }); // message animations

    // parse text 
    chatContainer.appendChild(messageElement);

    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;


}

function restaurantResponseToUser(messageText) {
    let userChoice = parseInt(messageText.trim()); // store in var/convert string to int/and trim any spaces from user choice

    switch (userChoice) {

        case 1:
            chatbotSendMessage('you chose Careers in CS');
            user.meals.push(options[1]);
            chatbotSendMessage('Something else? if yes choose a new number or 50 to end');

            break; // brk each time to get out of switch 
        case 2:
            chatbotSendMessage('you chose Opportunities');
            user.meals.push(options[2]);
            chatbotSendMessage('Something else? if yes choose meal number or 50 to checkout');
            break;
        case 3:
            chatbotSendMessage('you chose Resources');
            user.meals.push(options[3]);
            chatbotSendMessage('Something else? if yes choose meal number or 50 to checkout');
            break;

        case 4:
            chatbotSendMessage('you chose Skills in CS');
            user.meals.push(options[4]);
            chatbotSendMessage('Something else? if yes choose meal number or 50 to checkout');
            break;

        case 5:
            chatbotSendMessage('you chose Women in Tech');
            user.meals.push(options[5]);
            chatbotSendMessage('Something else? if yes choose meal number or 50 to checkout');
            break;
        case 50:
            alert('checkout');
            // chatbotSendMessage("You ordered: meals number "+ user.meals);
            chatbotSendMessage("Total Price : $" + getTotalPrice());
            chatbotSendMessage("please click this link to complete checkout:");
            chatbotSendMessage("<a href='https://google.com'>Checkout</a>");
            //send meals + ticket + payment status to backend

        //     break;
        // default:               // if user choices matches nothing 
        //     alert("Please choose a valid number");  // 1/2/3 choice option error
        //     chatbotSendMessage("Please choose a valid number");// option error in chat
    }

    // console.log(user);

}

function showMenu() {

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
    chatContainer.appendChild(messageElement);     // parse text 

}

sendBtn.addEventListener('click', function (e) {

    if (textbox.value == "") {
        alert('Please type in a message');

    } else {

        let messageText = textbox.value.trim();
        user.message = messageText;
        sendMessage(messageText);
        textbox.value = "";

        askQuestion(messageText);
        restaurantResponseToUser(messageText);

    }
});

textbox.addEventListener('keypress', function (e) {
    if (e.which == 13) { // 13 = enter button for user keyboard
        if (textbox.value == "") {
            alert('Please type in a message'); // display alert message for no blanks - user XP better

        } else {

            let messageText = textbox.value.trim(); // trim for spaces
            user.message = messageText; // for processing user message 
            sendMessage(messageText);
            textbox.value = ""; //message box to be empty after sending text

            askQuestion(messageText);
            restaurantResponseToUser(messageText);

        }

    }

    
});