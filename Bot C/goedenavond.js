const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    

    return message.channel.send("Goedenavond, Heeft u een leuke ochtend en middag gehad? Nou maak er ook nog maar even een leuke avond van :smile:");

}

module.exports.help = {
    name: "goedenavond"
}