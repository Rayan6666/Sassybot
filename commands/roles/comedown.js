const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');


//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    if (message.member.roles.find(role => role.name === "Comedown")) {
        message.member.removeRole(message.member.roles.find(role => role.name === "Comedown💤"));
        return message.channel.send(message.member.displayName + " is no longer coming down").then(msg => {
            msg.delete(4000)
        });
    }
    message.member.addRole(message.guild.roles.find(role => role.name === "Comedown"));
    const exampleEmbed = new Discord.RichEmbed()
        .setColor('#cbbfd7')
        .setTitle('Such sadness ')
        .setDescription(message.member.displayName + " is now coming down.")
        .setTimestamp();

    return message.channel.send(exampleEmbed).then(msg => {
        msg.delete(4000)
    });
};
module.exports.help = {
    name: "comedown"
};

