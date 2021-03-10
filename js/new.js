
let userName = '';
const regex = /[A-z]+/; // more than 1 character
while (userName == '') {
    const promptt = prompt("Please enter your name:");

    if (promptt.trim() != "" && regex.test(promptt.trim())) {
        userName = promptt.trim();
        console.log(userName);
        
    }
    if (userName == ''){
        alert("Please enter letters only");
    }

}

const conversations = {
    greeting: { // variable
        message: `Hi there ${userName} ! 😃`, // bot output
        chatBubbles: [ // chatbubble array
            {
                text: "Hello!", // bubble option selected & user's text
                onClick: () => changeConversation(conversations.options) // changes over to next conversation
            },
        ],
        render: (text) => { // returning string / show for bot / without image
            return withChatbotIcon(text) // bot style function with next var // callback function
        }
    },

    options: {
        message: `To get started, pick an option to discuss`,
        chatBubbles: [
            {
                text: "Careers in CS",
                onClick: () => changeConversation(conversations.careersConfirm)
            },
            {
                text: "Skills in CS",
                onClick: () => changeConversation(conversations.skillsConfirm)
            },
            {
                text: "Resources",
                onClick: () => changeConversation(conversations.resourcesConfirm)
            }
        ],
        render: (text) => {
            // return `<p>${text}</p>`
            return withChatbotIcon(text)

        }
    },

    careersConfirm: {
        message: `You would like more information to do with careers in the tech industry?`, // user output
        chatBubbles: [
            {
                text: "Yes please!",
                onClick: () => changeConversation(conversations.careers)
            },
            {
                text: "return to options",
                onClick: () => changeConversation(conversations.options)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    careers: {
        message: `${userName}, there are so many roles & careers available in the tech industry ! Which are you interested in?`, // user output
        chatBubbles: [
            {
                text: "AI",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Cybersecurity",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Data Analyst",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Game Design",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Game Dev",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "HCI",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Media",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Project Management",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Web Dev",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Software Dev",
                onClick: () => changeConversation(conversations.careersInterest)
            },
            {
                text: "Programming",
                onClick: () => changeConversation(conversations.careersInterest)
            },
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    careersInterest: {
        message: `That sounds amazing ${userName}! The industry could do with an individual like you`,
        chatBubbles: [
            {
                text: "😁",
                onClick: () => changeConversation(conversations.careersConfid)
            },
            {
                text: "I have self doubts",
                onClick: () => changeConversation(conversations.careersDoubts)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    careersConfid: {
        message: `Self-confidence is key, you have my support ${userName} ❤️`,
        chatBubbles: [
            {
                text: "",
                onClick: () => changeConversation(conversations.careers)
            },
            {
                text: "I have self doubts",
                onClick: () => changeConversation(conversations.careersDoubts)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    careersDoubts: {
        message: `${userName}, you can do this! There are many resources to support you in areas of improvements`,
        chatBubbles: [
            {
                text: "Show me!",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "I know",
                onClick: () => changeConversation(conversations.options)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    resourcesConfirm: {
        message: `You would like some resources to guide you on what the industry has to offer?`, // user output
        chatBubbles: [
            {
                text: "Yup!",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "menu options",
                onClick: () => changeConversation(conversations.options)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    resources: {
        message: `${userName}, I will guide you to resources that will aid you in all things in CS! Pick a topic`, // user output
        chatBubbles: [
            {
                text: "Online coding classes",
                onClick: () => changeConversation(conversations.codingClass)
            },
            {
                text: "Workshops",
                onClick: () => changeConversation(conversations.workshops)
            },
            {
                text: "STEM organisations",
                onClick: () => changeConversation(conversations.stemOrg)
            },
            {
                text: "keynote speakers",
                onClick: () => changeConversation(conversations.keySpeakers)
            },
            {
                text: "Inspirational women in Tech",
                onClick: () => changeConversation(conversations.wit)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    codingClass: { // links to websites
        message: `Learning new coding languages will expand your skills ${userName}`,
        chatBubbles: [
            {
                text: "I will start! 👾",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "More resources",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "back to options",
                onClick: () => changeConversation(conversations.options)
            }
        ],
        render: (text) => {

            setTimeout(() => { // open links 3 seconds after message
                alert(`Check out these recommended sites ${userName}, there is always something new to learn:`)
                window.open('https://www.codecademy.com/');
                window.open('https://adadevelopersacademy.org/');
                window.open('https://www.womenwhocode.com/');
                window.open('https://skillcrush.com/');
            }, 3000)
            return withChatbotIcon(text)
        }
    },

    // improveElse: {
    //     message: `There is always many areas to improve on, how about one of these?`, // user output
    //     chatBubbles: [
    //         {
    //             text: "Skills",
    //             onClick: () => changeConversation(conversations.skills)
    //         },
    //         {
    //             text: "Careers",
    //             onClick: () => changeConversation(conversations.careers)
    //         },

    //     ],
    //     render: (text) => {
    //         return withChatbotIcon(text)

    //     }
    // },

    // workshops: {
    //     message: `There are many workshops to take part in ${userName},
    //     with a lot of potential to open up new doors for you`, // user output
    //     chatBubbles: [
    //         {
    //             text: "I will look into joining!",
    //             onClick: () => changeConversation(conversations.options)
    //         },
    //         {
    //             text: "More resources",
    //             onClick: () => changeConversation(conversations.resources)
    //         },
    //         {
    //             text: "back to options",
    //             onClick: () => changeConversation(conversations.options)
    //         }

    //     ],
    //     render: (text) => {

    //         setTimeout(() => {
    //             alert(`hold on ${userName}, opening recommended sites for you:`)
    //             window.open('https://teachinglondoncomputing.org/free-workshops/');
    //             window.open('https://www.whymaker.co/all_workshops.html');
    //         }, 3000)
    //         return withChatbotIcon(text)

    //     }
    // },

    // stemOrg: {
    //     message: `${userName}, have a look at these different organisations which will
    //     provide you with further support and knowledge in this amazing and diverse industry`, // user output
    //     chatBubbles: [
    //         {
    //             text: "Seems interesting!",
    //             onClick: () => changeConversation(conversations.options)
    //         },
    //         {
    //             text: "More resources",
    //             onClick: () => changeConversation(conversations.resources)
    //         },
    //         {
    //             text: "back to options",
    //             onClick: () => changeConversation(conversations.options)
    //         }
    //     ],
    //     render: (text) => {

    //         setTimeout(() => {
    //             alert(` ${userName}, these sites will provide you with the extra details
    //              of the opportunities that STEM careers provide:`)
    //             window.open('https://www.stem.org.uk/');
    //             window.open('https://www.womeninstem.co.uk/');
    //             window.open('https://stemettes.org/');
    //             window.open('https://www.wisecampaign.org.uk/wise-network/women-in-stem-networks/');
    //             break;
    //         }, 3000)
    //         return withChatbotIcon(text)

    //     }
    // },

    // keySpeakers: {
    //     message: `Have a listen to these event talks 🎤 ${userName}, they can be quite inspiring! `,
    //     chatBubbles: [
    //         {
    //             text: "I'll have a listen! ",
    //             onClick: () => changeConversation(conversations.options)
    //         },
    //         {
    //             text: "More resources",
    //             onClick: () => changeConversation(conversations.resources)
    //         },
    //         {
    //             text: "Back to options",
    //             onClick: () => changeConversation(conversations.options)
    //         }
    //     ],
    //     render: (text) => {
    //         return withChatbotIcon(text)

    //     }
    // },

    // wit: {
    //     message: `${userName}, by attending workshops you can gain a lot of insight into the industry!`, // user output
    //     chatBubbles: [
    //         {
    //             text: "Inspirational women in Tech",
    //             onClick: () => changeConversation(conversations)
    //         }
    //     ],
    //     render: (text) => {
    //         return withChatbotIcon(text)

    //     }
    // },

    endChat: {
        message: `I'm always here for you! 👋`, // user output
        chatBubbles: [
            {
                text: "Goodbye!",
                onClick: (closeWindow)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

}

let currentConversation = null // default value
// 2 divs for CB and User seperate - into 1
// user = to switch btetween user and CB 
//

function sendMessage(message, user = false, wait = 0) { // optional parameter - call SM without user message its set to false originally
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
        messageElement.scrollIntoView();
        
    }, wait)

    // chatContainer.scrollTop = chatContainer.scrollHeight;

}

function showChatBubbles(bubbles) { // option bubbles wrapper
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

function changeConversation(conversation) {
    currentConversation = conversation
    sendMessage(currentConversation.render(currentConversation.message), false, 1500)
    showChatBubbles(currentConversation.chatBubbles)
}
changeConversation(conversations.greeting) // default value


function removeAllChildNodes(parent) { // previous bubbles
    while (parent.firstChild) { // FC is true, remove it, and replace with parent option
        parent.removeChild(parent.firstChild)
    }
}

function withChatbotIcon(render) { // design span for bot
    return `<img src="assets/img/logo-transparent.png" width="30px"
    alt="chatbot logo"><span style="padding-right: 5px; padding-left: 5px;">WITbot:</span><span>${render}</span>`
}

function withUserIcon(text) { // design span for user 
    return `<span style="padding-right: 5px; padding-left: 5px;">You:</span><span>${text}</span>`
    // + `<img src="assets/img/user-icon.png" width="20px"
    // alt="user logo">`
}

function withChatBubble(text) { // bubble options
    return `<div class="chatBubble">${text}</div>`
}

function closeWindow() {
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

// variable: { 
//     message: `There's a whole world out there for you to discover!`, // user output
//     chatBubbles: [
//         {
//             text: "fix next steps..",
//             onClick: () => changeConversation(conversations.?)
//         }
//     ],
//     render: (text) => {
//         // return `<p>${text}</p>`
//         return withChatbotIcon(text)

//     }
// }

// {
//     text: "Another option",
//     onClick: () => alert("You clicked the other thing")
// },