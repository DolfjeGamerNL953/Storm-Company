const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    

    return message.channel.send("Hallo typ !commands voor mijn commandos");

}

module.exports.help = {
    name: "hallo"
}