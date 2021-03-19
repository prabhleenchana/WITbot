import { changeConversation, closeWindow, withChatbotIcon } from './functions.js';

let userName = '';
const regex = /[A-z]+/; // more than 1 character
while (userName == '') {
    const promptt = prompt("Please enter your name:");

    if (promptt.trim() != "" && regex.test(promptt.trim())) {
        userName = promptt.trim();
        console.log(userName);

    }
    if (userName == '') {
        alert("Please enter letters only");
    }
}


const conversations = {
    greeting: { // variable
        message: `Hi there ${userName} ! 😃`, // bot output
        chatBubbles: [ // chatbubble array
            {
                text: "Hello!", // bubble option selected & user's text
                onClick: () => changeConversation(conversations.options) // switch over to next conversation
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
            // {
            //     text: "Opportunities",
            //     onClick: () => changeConversation(conversations.resourcesConfirm)
            // },
            {
                text: "Skills in CS",
                onClick: () => changeConversation(conversations.skillsConfirm)
            },
            {
                text: "Resources",
                onClick: () => changeConversation(conversations.resourcesConfirm)
            },
            // {
            //     text: "Women in Tech",
            //     onClick: () => changeConversation(conversations.resourcesConfirm)
            // }
           
        ],
        render: (text) => {
            // return `<p>${text}</p>`
            return withChatbotIcon(text)

        }
    },

    //careers - advice option
    careersConfirm: {
        message: `You would like more information to do with careers in the tech industry?`,
        chatBubbles: [
            {
                text: "Yes please!",
                onClick: () => changeConversation(conversations.careers)
            },
            {
                text: "Return to options",
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
        message: `That's a good choice ${userName}! The industry could do with an individual like you`,
        chatBubbles: [
            {
                text: " I'm excited to pursue the career 😁 ",
                onClick: () => changeConversation(conversations.careersConfid)
            },
            {
                text: "I'm having self doubts",
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
                text: "I agree",
                onClick: () => changeConversation(conversations.improveElse)
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

    improveElse: {
        message: `There is always many areas to improve on, how about one of these?`, // user output
        chatBubbles: [
            {
                text: "Skills",
                onClick: () => changeConversation(conversations.skills)
            },
            {
                text: "Careers",
                onClick: () => changeConversation(conversations.careers)
            },

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

    careersToSkills: {
        message: `Have a look at some skills you could improve on!`,
        chatBubbles: [
            {
                text: "Okay!",
                onClick: () => changeConversation(conversations.skills)
            },
            {
                text: "Back to options",
                onClick: () => changeConversation(conversations.options)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    //skills - advice option
    skillsConfirm: {
        message: `You would like more information to do with skills in the tech industry?`,
        chatBubbles: [
            {
                text: "Yes please!",
                onClick: () => changeConversation(conversations.skills)
            },
            {
                text: "Return to options",
                onClick: () => changeConversation(conversations.options)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    skills: {
        message: `There is a wide range of skills to be learnt and developed through careers in the IT industry`,
        chatBubbles: [
            {
                text: "I have already worked on developing my skills",
                onClick: () => changeConversation(conversations.skillsImprov)
            },
            {
                text: "I have a few skills, but looking to improve more",
                onClick: () => changeConversation(conversations.skillsImprov)
            },
            {
                text: "I need to improve my skill set",
                onClick: () => changeConversation(conversations.skillsImprov1)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    skillsImprov: {
        message: `That's great ! Have a look at these resources to help expand your skill set`,
        chatBubbles: [
            {
                text: "I'll have a look!",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "🙁",
                onClick: () => changeConversation(conversations.resources)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    skillsImprov1: {
        message: `No worries ${userName} ! Everyone has to begin somewhere! Check out these resources for ways to improve`,
        chatBubbles: [
            {
                text: "Sure!",
                onClick: () => changeConversation(conversations.resources)
            },
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    //resources - website links
    resourcesConfirm: {
        message: `You would like some resources to guide you on what the industry has to offer?`, // user output
        chatBubbles: [
            {
                text: "Yup!",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "Menu options",
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
                text: "Keynote speakers",
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

    codingClass: {
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
                text: "Back to options",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "End Chat",
                onClick: () => changeConversation(conversations.help)
            }
        ],
        render: (text) => {

            setTimeout(() => { // open links 3 seconds after message
                alert(`Check out these recommended sites ${userName}, there is always something new to learn:`)
                window.open('https://www.codecademy.com/');
                window.open('https://www.womenwhocode.com/');
                window.open('https://skillcrush.com/');
            }, 3000)
            return withChatbotIcon(text)
        }
    },

    workshops: {
        message: `There are many workshops to take part in ${userName},
        with a lot of potential to open up new doors for you`, // user output
        chatBubbles: [
            {
                text: "I will look into joining!",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "More resources",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "Back to options",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "End Chat",
                onClick: () => changeConversation(conversations.help)
            }

        ],
        render: (text) => {

            setTimeout(() => {
                alert(`hold on ${userName}, opening recommended sites for you:`)
                window.open('https://teachinglondoncomputing.org/free-workshops/');
                window.open('https://www.whymaker.co/all_workshops.html');
            }, 3000)
            return withChatbotIcon(text)

        }
    },

    stemOrg: {
        message: `${userName}, have a look at these different organisations which will
        provide you with further support and knowledge in this amazing and diverse industry`, // user output
        chatBubbles: [
            {
                text: "Seems interesting!",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "More resources",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "Back to options",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "End Chat",
                onClick: () => changeConversation(conversations.help)
            }
        ],
        render: (text) => {

            setTimeout(() => {
                alert(` ${userName}, you may find these sites useful with details on
                opportunities and journeys that STEM careers provide:`)
                window.open('https://www.stem.org.uk/');
            }, 3000)
            return withChatbotIcon(text)

        }
    },

    keySpeakers: {
        message: `Have a listen to these event talks 🎤 ${userName}, they can be quite inspiring!`,
        chatBubbles: [
            {
                text: "I'll have a listen!",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "More resources",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "Back to options",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "End Chat",
                onClick: () => changeConversation(conversations.help)
            }
        ],
        render: (text) => {
            setTimeout(() => {
                alert(`hold on ${userName}, opening recommended sites for you:`)
                window.open('https://www.jla.co.uk/inspirational-speakers-women-stem-science-technology-engineering-mathematics/');
                
            }, 3000)
            return withChatbotIcon(text)

        }
    },

    wit: {
        message: `These amazing women have helped shape the industry ${userName}, so that you can come and shape the future! 👩‍💻`,
        chatBubbles: [
            {
                text: "I'll check it out!",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "More resources",
                onClick: () => changeConversation(conversations.resources)
            },
            {
                text: "Back to options",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "End Chat",
                onClick: () => changeConversation(conversations.help)
            }
        ],
        render: (text) => {
            alert(`${userName} you will enjoy reading about these fab women`)
            window.open('https://www.everywoman.com/my-development/learning-areas/articles/inspirational-women-history-technology-edition');
            return withChatbotIcon(text)

        }
    },

    help: {
        message: `Did this help?`,
        chatBubbles: [
            {
                text: "I need more information ! ",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "Yes!",
                onClick: () => changeConversation(conversations.optConfirm)
            },

        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    optConfirm: {
        message: `Back to options?`,
        chatBubbles: [
            {
                text: "Yes!",
                onClick: () => changeConversation(conversations.options)
            },
            {
                text: "No, I'm sorted for now thanks! ",
                onClick: () => changeConversation(conversations.endChat)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    },

    //end chat conversation - close window
    endChat: {
        // message: `Don't forget about me when you're a leading tech genius! 👋`,
        message: `You can always visit whenever you need me! 👋`,
        chatBubbles: [
            {
                text: "Goodbye!",
                onClick: (closeWindow)
            }
        ],
        render: (text) => {
            return withChatbotIcon(text)

        }
    }
}

changeConversation(conversations.greeting) // default value
export default conversations
