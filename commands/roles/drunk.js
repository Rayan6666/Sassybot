const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');


//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    if(message.member.roles.find(role => role.name === "Drunk")) {
        message.member.removeRole(message.member.roles.find(role => role.name === "Drunk🍺"));
        return message.channel.send(message.member.displayName + " is no longer drunk").then(msg => {
            msg.delete(4000)
        });
    } else {
        message.member.addRole(message.guild.roles.find(role => role.name === "Drunk"));
        setTimeout(() => {
            message.member.removeRole(message.member.roles.find(role => role.name === "Drunk"));
            return message.channel.send(message.member.displayName + " is no longer drunk. (Timer expired)").then(msg => {
                msg.delete(4000)
            });
        }, 14400000);
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#9d0082')
            .setTitle('Such intoxication ')
            .setDescription(message.member.displayName + " is now drunk.")
            .setTimestamp();

        return message.channel.send(exampleEmbed).then(msg => {
            msg.delete(4000)
        });
    }
};
module.exports.help = {
    name: "drunk"
};

