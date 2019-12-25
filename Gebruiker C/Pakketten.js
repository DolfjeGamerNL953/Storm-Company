const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL

    var pakketEmbed = new discord.RichEmbed()
        .setTitle("Pakketten")
        .setDescription("De pakket inhouden")
        .setColor("RANDOM")
        .setThumbnail(icon)
        .addField("Storm Vita Pakket:", "64x Vita A \n 64x Vita B \n 64x Vita C \n\ 64x Vita D")
        .addField("Storm Pro Pakket:", "64x Zalm \n 64x Pizza \n 64x \n  64x Hamburger \n 64x Bacon \n 64x Sushi \n 64x Golden Appels")
        .addField("Storm Fruit Pakket:", "64x Appel \n 64x Ananas \n 64x Water")
        .addField("Storm Snoep Pakket", "64x Lolly rood \n 64x Jellybenas \n 64x Zuurstok")
        .addField("Storm Overig Pakket", "64x Flesjes \n 64x Water flesjes \n 64x Boekjes")    
        .setFooter("© 2019 StormCompany");


    message.channel.send(pakketEmbed)
}

module.exports.help = {
    name: "pakketen"
}