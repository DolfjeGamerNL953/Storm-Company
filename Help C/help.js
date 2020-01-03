const discord = require("discord.js");
const fs = require("fs")
const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));
module.exports.run = async (bot, message, args) => {

    const onlyHelp = new discord.RichEmbed()
        .setColor(0x1D2B6)
        .addField("hai")

    message.channel.send(onlyHelp)
}

module.exports.help = {
    name: "help"
}