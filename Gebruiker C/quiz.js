const discord = require("discord.js");

module.exports.run = async (bot, message, args), msg => {

    if(answered == false && message.author == quizUser) {
        userAnswer = msg;
        if(userAnswer == cAnswer) {
            message.reply ("got it right! :smile:");
        }
        else {
            message.reply ("got it wrong! :(")
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }


        if(msg.startsWith(prefix + "quiz")) {
            number = 3;
            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch(random) {
                case 1: message.channel.send("Hoe oud is de bot: \nA 5j \nB65j \nC421j \n5000j"); cAnswer = "a"; break; 
                case 2: message.channel.send("hoeveel testen zijn er nu"); cAnswer = "5"; break;
                case 3: message.channel.send("When was Killroy created?"); cAnswer = "1940"; break;
        
            } 
            answered = false;
            quizUser = message.author;
        }
    }

module.exports.help = {
    name: "helpgebruiker"
}