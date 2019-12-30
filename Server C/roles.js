const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    await message.delete().catch(O_o => { });

    const a = message.guild.roles.get('659706141521215488') //verification
    const b = message.guild.roles.get('659840807297351753') //ban
    const c = message.guild.roles.get('659841093541560320') //game

    const filter = (reaction, user) => ['A', 'B', 'C'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new RichEmbed()
    .setTitle('Avaiabble Roles')
    .setDescription(`
    A 
    B 
    C
    

    `)
    .setColor('RANDOM')
    .setFooter(`ID: ${message.author.id}`);

    message.channel.send(embed);
    
};


module.exports.help = {
    name: "roles"
};