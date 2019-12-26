const discord = require("discord.js");
var role = message.guild.roles.find("name", "Verificatie");

module.exports.run = async (bot, message, args) => {


    var roleEmbed = new discord.RichEmbed()
    .setTitle("Verificatie")
    .addField("U heeft succesvol de verificatie role ontvangen veel plezier op de StormComp discord")
    .setFooter("© 2019 StormCompany");

    message.channel.send(roleEmbed).then(msg => {msg.delete(60000)});

    message.author.addRole(role)
}


module.exports.help = {
    name: "verificatie"
}


