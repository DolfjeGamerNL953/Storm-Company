module.exports.run = (client, message, args) => {
    let reden = args.slice(1).join(' ');
    client.unbanreden = reden;
    client.unbanAuth = message.author;
    let user = args[0];
    let unbanlog = client.channels.find('name', 'unban-logs');
    if (!unbanlog) return message.reply('I cannot find a unban-logs channel');
    if (reden.length < 1) return message.reply('You must supply a reden for the unban.');
    if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
    message.guild.unban(user);
  };


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  module.exports.help = {
    name: 'unban',
    description: 'Unbans the user.',
    usage: 'unban [gebruiker] [reden]'
  };