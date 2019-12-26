const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var text = ("!tempmute -> Mute een gebruiker voor een bepaalde tijd \n !ticketclose > Sluit een ticket \n !unban -> Verwijder een verbanning (LEAD ONLY) \n !unmute -> Verwijder een mute (LEAD ONLY) \n !warn -> Geef een gebruiker een waarschuwing")

    var helpadminEmbed = new discord.RichEmbed()
        .setTitle("Help Commands")
        .setDescription("!helpadmin voor de lijst met admin commands")
        .setColor("RANDOM")
        .addField(text)
        .setFooter("**© 2019 StormCompany**");

    message.channel.send(helpadminEmbed)
}

module.exports.help = {
    name: "helpadmin"
}