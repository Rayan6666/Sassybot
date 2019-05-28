const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');
const config = require('../config/config.json');

module.exports.run = async (Client, message, args) => {
    if (message.member.hasPermission("BAN_MEMBERS")) {

        if (args[1] === "purge") {
            const deleteCount = parseInt(args[2], 10);
            if(!deleteCount || deleteCount < 2 || deleteCount > 100) {
                return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
            }
            const fetched = await message.channel.fetchMessages({limit: deleteCount});
            message.channel.bulkDelete(fetched).catch(error => message.channel.send(`Couldn't delete messages because of: ${error}`));
        }

        if (args[1] === "tmute") {
            let target = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
            let time = args[3];

            if (target) {
                if (!target.roles.find(role => role.name === "Muted")) {
                    target.addRole(message.guild.roles.find(role => role.name === "Muted"));
                    console.log(chalk.green(target, "is now muted"));

                    setTimeout(() => {
                        target.removeRole(message.member.roles.find(role => role.name === "Muted"));
                        console.log(chalk.red(target, "is no longer muted!"));
                        return target.send("You're no longer muted!");
                    }, time * 1000);

                } else {
                    target.removeRole(message.member.roles.find(role => role.name === "Muted"));
                    return message.channel.send(target + " has been unmuted");
                }
            }
        }

        if (args[1] === "verify") {
            if (args[2]) {
                let target = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
                if (!target) {
                    return message.channel.send("Can't find user " + args[2])
                } else {

                    target.addRole(message.guild.roles.find(role => role.name === "Verification"));
                    return message.channel.send(args[2] + " Has been put under verification.");
                }
            } else {
                return message.channel.send("No user specifed to verify");
            }
        }

    } else {
        console.log(chalk.red(message.member.displayName, "tried to use admin commands"));
        return message.channel.send("You do not have permission to use admin commands.");
    }

    if (args[1] === "setrole") {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            let target = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
            let name = args[3];

            if (target) {
                if (message.guild.roles.find(role => role.name === name)) {
                    if (target.roles.find(role => role.name === name)) {
                        target.removeRole(target.roles.find(role => role.name === name));
                        return message.channel.send("Removed role" + " " + args[3] + " from " + target)
                    } else {
                        target.addRole(message.guild.roles.find(role => role.name === name));
                        return message.channel.send("Added role " + args[3] + " to" + target + "'s" + " roles")
                    }

                } else {
                    return message.channel.send("Role" + " " + args[3] + " not found in roles list.");
                }
            } else {
                return message.channel.send("No user specified to give a role to!");
            }

        } else {
            return message.channel.send("You do not have permission to assign roles.");
        }
    }
};

module.exports.help = {
    name: "admin"
};
