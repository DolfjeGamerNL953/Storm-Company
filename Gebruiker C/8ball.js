const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var sayings = ["Yes", "No", "Maybe", "Probably no", "Probably yes"]
        
    var result = Math.floor((Math.random() * sayings.lenght) + 0);

    const ballEmbed = new discord.RichEmbed()
    .setTitle('8ball command')
    .setColor('RANDOM')
    .addField(args, sayings[result])
    .setFooter("**© 2019 StormCompany**");
   

    message.channel.send(ballEmbed)
}


module.exports.help = {
    name: "8ball"
}