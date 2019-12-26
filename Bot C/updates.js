const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var updatesembed = new discord.RichEmbed()
    .setDescription("Updates StormCompany Bot")
    .setColor("RANDOM")
    .addField("December: \n De bot is gemaakt")
    .setFooter("**© 2019 StormCompany**");

    message.channel.send(updatesembed)
}

module.exports.help = {
    name: "updates"
}