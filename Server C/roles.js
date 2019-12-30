const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    await message.delete().catch(O_o => { });

    const a = message.guild.roles.get('661167241026600991') //verification
    const b = message.guild.roles.get('661167257296306196') //ban
    const c = message.guild.roles.get('661167274505404421') //game

    const filter = (reaction, user) => ['A', 'B', 'C'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new RichEmbed()
        .setTitle('Avaiabble Roles')
        .setDescription(`
    A ${a.toString()}
    B ${b.toString()}
    C ${c.toString()}
    

    `)
        .setColor('RANDOM')
        .setFooter(`ID: ${message.author.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('A');
        await msg.react('B');
        await msg.react('C');

        msg.awaitReactions(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        }).then(collected => {

            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case 'A':
                    if (message.member.roles.has(a.id)) {
                        msg.delete(2000);
                        return message.channel.send('U heeft deze rol al, klopt dit niet meld het dan bij een van de beheerders');
                    }
                   message.member.addRole(a).catch(err => {
                       console.log(err);
                       return message.channel.send(`Er is iets mis gegaan bij het toevoegen van de rol, meld het bij een van de Beheerders`)
                   });
                   message.channel.send(`U heeft succesvol de rol: **${a.name}** gekregen`).then(m => m.delete(3000));
                   message.delete();
                    break;
                case 'B':
                    if (message.member.roles.has(b.id)) {
                        msg.delete(2000);
                        return message.channel.send('U heeft deze rol al, klopt dit niet meld het dan bij een van de beheerders');
                    }
                    message.member.addRole(b).cbtch(err => {
                        console.log(err);
                        return message.channel.send(`Er is iets mis gegaan bij het toevoegen van de rol, meld het bij een van de Beheerders`)
                    });
                    message.channel.send(`U heeft succesvol de rol: **${b.name}** gekregen`).then(m => m.delete(3000));
                    message.delete();
                    break;
                case 'C':
                    if (message.member.roles.has(c.id)) {
                        msg.delete(2000);
                        return message.channel.send('U heeft deze rol al, klopt dit niet meld het dan bij een van de beheerders');
                    }
                    message.member.addRole(c).catch(err => {
                        console.log(err);
                        return message.channel.send(`Er is iets mis gegaan bij het toevoegen van de rol, meld het bij een van de Beheerders`)
                    });
                    message.channel.send(`U heeft succesvol de rol: **${c.name}** gekregen`).then(m => m.delete(3000));
                    message.delete();
                    break;
            }
        }).catch(collected => {
            return message.channel.send(`Ik kan u niet aan deze rol`);
        });
    });

};


module.exports.help = {
    name: "roles"
};