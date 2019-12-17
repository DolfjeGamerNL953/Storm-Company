const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    

    return message.channel.send("Goedemiddag, heeft u een leuke ochtend gehad? Maak er een vrolijke fijne middag van :slight_smile:");

}

module.exports.help = {
    name: "goedemiddag"
}