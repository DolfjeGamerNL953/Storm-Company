const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var prefix = '!'

    if (!args[0]) return message.channel.send(`Gebruik: ${prefix}8ball <vraag>.`);
    var question = message.member.send

    var sayings = ["Tuurlijk", "", "", "", ""]
        
    var result = Math.floor((Math.random() * sayings.length) + 0);

    const ballEmbed = new discord.RichEmbed()
    .setTitle('8ball command')
    .setColor('RANDOM')
    .addField(args, sayings[result])
   

    message.channel.send(ballEmbed)
}


module.exports.help = {
    name: "8ball"
}