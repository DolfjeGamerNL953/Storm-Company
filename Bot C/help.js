const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var testembed = new discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("#ff000")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f")
    .addField("f");

    message.channel.send(testembed);
}

module.exports.help = {
    name: "help"
}