const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.channel.send("Gebruik: ?clear <aantal>");

    // !clear 21

    if (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("U heeft hier geen permissies voor");

    if (!args[0]) return message.channel.send("Geef een aantal op");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] == 0) {

                !message.channel.send(`Helaas ik kan geen 0 berichten verwijderen. `).then(msg => msg.delete(3000));

            } else if (args[0] == 1) {

                !message.channel.send(`Ik heb 1 bericht verwijderd. `).then(msg => msg.delete(3000));

            } else {

                message.channel.send(`Ik heb ${args[0]} berichten verwijderd. `).then(msg => msg.delete(3000));

            }
        });

    } else {
        return message.channel.send("Dit is geen geldig getal.");
    }


}

module.exports.help = {
    name: "clear"
}