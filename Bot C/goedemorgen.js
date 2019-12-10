const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    

    return message.channel.send("Goedemorgen, heeft u goed geslapen? Maak er een vrolijke fijne ochtend van :slight_smile:");

}

module.exports.help = {
    name: "goedemorgen"
}