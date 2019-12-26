const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("U heeft hier geen permissies voor");
    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rMember) return message.reply("Gebruiker niet gevonden")
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Deze role bestaat niet");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("De role is niet gevonden");

    if(rMember.roles.has(gRole.id));
    await(rMember.addrole(gRole.id));

    try{
        await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
    }catch(e){
     message.channel.send(`Congrats to <@${rMember.id} been given the role ${gRole.name}. We tried to DM them, but their DM are locked`) 
    }
}
module.exports.help = {
    name: "addrole"
}
