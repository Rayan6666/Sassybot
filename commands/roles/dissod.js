const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');

//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    if (message.member.roles.find(role => role.name === "Dissod💫")) {
        const addrole = message.member.removeRole(message.member.roles.find(role => role.name === "Dissod💫"));
        console.log(addrole)

        return message.channel.send(message.member.displayName + " is no longer dissod").then(msg => {
            msg.delete(4000)
        });
    } else {
        message.member.addRole(message.guild.roles.find(role => role.name === "Dissod"));
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#9d0225')
            .setTitle('Such intoxication ')
            .setDescription(message.member.displayName + " is now dissod.")
            .setTimestamp();

        setTimeout(() => {
            message.member.removeRole(message.member.roles.find(role => role.name === "Dissod💫"));
            return message.channel.send(message.member.displayName + " is no longer dissod. (Timer expired)");
        }, 28800000);

        return message.channel.send(exampleEmbed).then(msg => {
            msg.delete(4000)
        });
    }
};
module.exports.help = {
    name: "dissod"
};

