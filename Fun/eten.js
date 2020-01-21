const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    

    return message.channel.send("Dus, Ga je al weer wat eten? Hopelijk schept de pot wat lekkers op wat je lust :smile:! Nou eetsmakelijk en hopelijk nog tot straks :slight_smile:");

}

module.exports.help = {
    name: "eten"
}