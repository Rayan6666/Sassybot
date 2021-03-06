const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');


//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message) => {
    message.delete(1000);

    if(message.member.roles.find(role => role.name === "Blazed")) {
        message.member.removeRole(message.member.roles.find(role => role.name === "Blazed🔥"));
        return message.channel.send(message.member.displayName + " is no longer stoned").then(msg => {
            msg.delete(4000)
        });
    } else {
        message.member.addRole(message.guild.roles.find(role => role.name === "Blazed🔥"));
        setTimeout(() => {
            message.member.removeRole(message.member.roles.find(role => role.name === "Blazed"));
            return message.channel.send(message.member.displayName + " is no longer blazed. (Timer expired)").then(msg => {
                msg.delete(4000)
            });
        }, 14400000);
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#1bd600')
            .setTitle('Such intoxication ')
            .setDescription(message.member.displayName + " is now blazed")
            .setTimestamp();

        return message.channel.send(exampleEmbed).then(msg => {
            msg.delete(4000)
        });
    }
};
module.exports.help = {
    name: "blazed"
};

