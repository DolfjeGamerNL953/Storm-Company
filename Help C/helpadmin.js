const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var helpadminEmbed = new discord.RichEmbed()
        .setTitle("Help Commands")
        .setDescription("!helpadmin voor de lijst met admin commands")
        .setColor("RANDOM")
        .addField("!ban > Verban een gebruiker \n !clear -> Verwijderd een bepaald aantal berichten \n !giveaway -> Maak een giveaway aan (LEAD ONLY) \n !kick -> Kick een gebruiker \n !mededeling -> Maak een mededeling aan (LEAD ONLY) \n !prefix -> Verander de bot prefix (LEAD ONLY) \n !tempban -> Verban een gebruiker voor een bepaalde tijd \n !tempmute -> Mute een gebruiker voor een bepaalde tijd \n !ticketclose > Sluit een ticket \n !unban -> Verwijder een verbanning (LEAD ONLY) \n !unmute -> Verwijder een mute (LEAD ONLY) \n !warn -> Geef een gebruiker een waarschuwing")
        .setFooter("**© 2019 StormCompany**");

    message.channel.send(helpadminEmbed)
}

module.exports.help = {
    name: "helpadmin"
}