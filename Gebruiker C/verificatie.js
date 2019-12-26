const discord = require("discord.js");
const role = message.guild.roles.get("659706141521215488");

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


