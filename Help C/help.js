const discord = require("discord.js");
const fs = require("fs")
const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));
module.exports.run = async (bot, message, args) => {

    const onlyHelp = new discord.RichEmbed()
        .setColor(0x1D2B6)
        .addField(`${commands[cmd].name}`, `**Description:** ${commands[cmd].desc}\n**Usage:** ${prefix + commands[cmd].usage}`);

    message.channel.send(onlyHelp)

    let commandsFound = 0;

    for (var cmd in commands) {

    }
}

module.exports.help = {
    name: "help"
}