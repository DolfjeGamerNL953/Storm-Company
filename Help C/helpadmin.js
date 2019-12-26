const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var helpadminEmbed = new discord.RichEmbed()
        .setTitle("Help Commands")
        .setDescription("!helpadmin voor de lijst met admin commands")
        .setColor("RANDOM")
        .addField("!tempmute -> Mute een gebruiker voor een bepaalde tijd")
        .setFooter("**© 2019 StormCompany**");

    message.channel.send(helpadminEmbed)
}

module.exports.help = {
    name: "helpadmin"
}