const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL

    var pakketEmbed = new discord.RichEmbed()
        .setTitle("Pakketten")
        .setDescription("De pakket inhouden")
        .setColor("RANDOM")
        .setThumbnail(icon)
        .addField("Storm Vita Pakket:", "64x Vita A \n\n 64x Vita B \n\n 64x Vita C \n\n 64x Vita D")
        .addField("Storm Pro Pakket:", "64x Zalm \n\n 64x Pizza \n\n 64x \n\n  64x Hamburger \n\n 64x Bacon \n\n 64x Sushi \n\n 64x Golden Appels")
        .addField("Storm Fruit Pakket:", "64x Appel \n\n 64x Ananas \n\n 64x Water")
        .addField("Storm Snoep Pakket", "64x Lolly rood \n\n 64x Jellybenas \n\n 64x Zuurstok")
        .addField("Storm Overig Pakket", "64x Flesjes \n\n 64x Water flesjes \n\n 64x Boekjes")    
        .setFooter("© 2019 StormCompany");


    message.channel.send(pakketEmbed)
}

module.exports.help = {
    name: "Pakketen"
}