const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    if(!args[2]) return message.reply("Stel een volledige vraag");
    let replies = ["Ja., Nee., Misschien."];

    let result = Math.floor((Math.random() * replies.lenght));
    let question = args.slice(1).join(" ");

    let ballembed = new discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff9900")
    .addField("Question", question)
    .addField("Answer", result);

    message.channel.send(ballembed)
}


module.exports.help = {
    name: "8ball"
}