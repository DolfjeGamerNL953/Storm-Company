const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    // !mededeling Titel // bericht // kleur // kanaal

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("U heeft hier geen permissies voor");

    var splitser = "//";

    if(args[0] == null){

        var useMessage = new discord.RichEmbed()
        .setTitle("Gebruik")
        .setColor("#ff0000")
        .setDescription(`Maak een mededeling door gebruik te maken van: \n !mededeling Titel ${splitser} Bericht ${splitser} Kleur ${splitser} Kanaal`);

        return message.channel.send(useMessage);

    }

    args = args.join(" ").split(splitser);

    if(args[2] == undefined) args[2] = "#ff0000";
    if(args[3] == undefined) args[3] = "chat";

    var options = {

        titel: args[0] || "Melding",
        bericht: args[1] || "Geen inhoud opgegeven",
        kleur: args[2].trim(),
        kanaal: args[3].trim()

    }

    var announcer = message.author;

    var mededelingEmbed = new discord.RichEmbed()
    .setTitle("Mededeling")
    .setColor(options.kleur)
    .setDescription(`${options.titel} \n\n ${options.bericht} \n`)
    .setTimestamp();

    var mededelingChannel = message.guild.channels.find(`name`, options.kanaal);
    if(!mededelingChannel) return message.channel.send("Kan het kanaal niet vinden");

    mededelingChannel.send(mededelingEmbed);

    
    var mlogEmbed = new discord.RichEmbed()
    .setTitle("Mededeling")
    .setColor(options.kleur)
    .setDescription(`Bericht van ${announcer} \n\n ${options.titel} \n\n ${options.bericht} \n`)
    .setTimestamp();

    var mededelingChannel = message.guild.channels.find("name", "mod-logs");
    if (!mededelingChannel) return message.guild.send("Het kanaal is niet gevonden");
    mededelingChannel.send(mlogEmbed);

}

module.exports.help = {
    name: "mededeling"
}