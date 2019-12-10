const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker 

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("U heeft hier geen permissies voor");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op of de gebruiker is niet op deze server");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("De persoon kan u niet waarschuwen");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een reden op");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("Waarschuwing")
        .setColor("#ff0000")
        .addField("Gewaarschuwd gebruiker", user)
        .addField("Gewaarschuwd door:", message.author)
        .addField("Reden", reason);

    var warnChannel = message.guild.channels.find("name", "straffen");
    if (!warnChannel) return message.guild.send("Het kanaal is niet gevonden");


    warnChannel.send(warnEmbed);

}

module.exports.help = {
    name: "warn"
}