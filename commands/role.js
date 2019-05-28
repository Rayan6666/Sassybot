const Discord = require('discord.js');
const chalk = require('chalk');
const mysql = require('mysql');
const config = require('../config/config.json');

// const database = mysql.createConnection({
//     host: config.database_host,
//     user: config.database_user,
//     password: config.database_password,
//     database: config.database
// });
// database.connect((error) => {
//     if (error) {
//         console.log(chalk.red("Database failed to connect.", error));
//         process.exit(1);
//     } else {
//         console.log(chalk.green.bold("Database has connected."));
//     }
// });

//role timers are defined in MS. 1 second = 1000ms
module.exports.run = async (Client, message, args) => {

    if (args[1] === "blazed"){
        if(message.member.roles.find(role => role.name === "Blazed 🔥")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Blazed 🔥"));
            return message.channel.send(message.member.displayName + " is no longer stoned").then(msg => {
                msg.delete(4000)
            });
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Blazed 🔥🔥"));
            setTimeout(() => {
                message.member.removeRole(message.member.roles.find(role => role.name === "Blazed 🔥"));
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
    }

    if (args[1] === "drunk"){
        if(message.member.roles.find(role => role.name === "Drunk 🍺")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Drunk 🍺"));
            return message.channel.send(message.member.displayName + " is no longer drunk").then(msg => {
                msg.delete(4000)
            });
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Drunk 🍺"));
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
    }

    if (args[1] === "comedown") {
        if (message.member.roles.find(role => role.name === "Comedown 💤")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Comedown 💤"));
            return message.channel.send(message.member.displayName + " is no longer coming down").then(msg => {
                msg.delete(4000)
            });
        }
        message.member.addRole(message.guild.roles.find(role => role.name === "Comedown 💤"));
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#cbbfd7')
            .setTitle('Such sadness ')
            .setDescription(message.member.displayName + " is now coming down.")
            .setTimestamp();

        return message.channel.send(exampleEmbed).then(msg => {
            msg.delete(4000)
        });
    }

    if (args[1] === "barred") {
        if (message.member.roles.find(role => role.name === "Barred 🎭")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Barred 🎭"));
            return false;
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Barred 🎭"));
            console.log(chalk.red(message.member.displayName, "Got the role:", chalk.blue("Barred")));

            setTimeout(() => {
                message.channel.send("Timer: removed role barred from" + " " + message.member.displayName).then(msg => {
                    msg.delete(4000)
                });
                message.member.removeRole(message.member.roles.find(role => role.name === "Barred 🎭🌛"))
            }, 43200000);
            const exampleEmbed = new Discord.RichEmbed()
                .setColor('#9d0082')
                .setTitle('Such intoxication ')
                .setDescription(message.member.displayName + " is now barred.")
                .setTimestamp();

            return message.channel.send(exampleEmbed).then(msg => {
                msg.delete(4000)
            });
        }
    }

    if (args[1] === "tripping") {
        if (message.member.roles.find(role => role.name === "Tripping 🌈")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Tripping 🌈"));
            return message.channel.send(message.member.displayName + " Is no longer tripping").then(msg => {
                msg.delete(4000)
            });
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Tripping 🌈"));
            setTimeout(() => {
                message.member.removeRole(message.member.roles.find(role => role.name === "Tripping 🌈🌈"));
                return message.channel.send(message.member.displayName + " is no longer tripping (Timer expired)").then(msg => {
                    msg.delete(4000)
                });
            }, 43200000);
            const exampleEmbed = new Discord.RichEmbed()
                .setColor('#ff00d3')
                .setTitle('Such intoxication ')
                .setDescription(message.member.displayName + " is now tripping")
                .setTimestamp();

            return message.channel.send(exampleEmbed).then(msg => {
                msg.delete(4000)
            });
        }
    }

    if (args[1] === "nodding") {
        if (message.member.roles.find(role => role.name === "Nodding 🌠")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Nodding 🌠"));
            return false;
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Nodding 🌠"));
            console.log(chalk.red(message.member.displayName, "Got the role:", chalk.blue("Nodding")));

            setTimeout( () => {
                message.member.removeRole(message.member.roles.find(role => role.name === "Nodding 🌠"));
                return message.channel.send(message.member.displayName + " is no longer nodding (Timer expired)").then(msg => {
                    msg.delete(4000)
                });
            }, 28800000);
            const exampleEmbed = new Discord.RichEmbed()
                .setColor('#7d109d')
                .setTitle('Such intoxication ')
                .setDescription(message.member.displayName + " is now nodding.")
                .setTimestamp();

            return message.channel.send(exampleEmbed).then(msg => {
                msg.delete(4000)
            });
        }
    }

    if (args[1] === "gaba") {
        if (message.member.roles.find(role => role.name === "GABAergic ⚓")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "GABAergic ⚓"));
            return message.channel.send(message.member.displayName + " is no longer GABAergic").then(msg => {
                msg.delete(4000)
            });
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "GABAergic ⚓"));

            setTimeout(() => {
                if (message.member.roles.find(role => role.name === "GABAergic")) {
                    message.member.removeRole(message.member.roles.find(role => role.name === "GABAergic ⚓"))
                } else {
                    return console.log("Did not have to remove the role GABAergic from", message.member.displayName);
                }
            }, 28800000);
            const exampleEmbed = new Discord.RichEmbed()
                .setColor('#9d9523')
                .setTitle('Such intoxication ')
                .setDescription(message.member.displayName + " is now GABAergic")
                .setTimestamp();

            return message.channel.send(exampleEmbed).then(msg => {
                msg.delete(4000)
            });
        }
    }

    if (args[1] === "deli") {
        if (message.member.roles.find(role => role.name === "Delirious 👥")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Delirious 👥"));
            return false;
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Delirious 👥"));
            console.log(chalk.red(message.member.displayName, "Got the role:", chalk.blue("Delirious")));

            setTimeout(() => {
                message.member.removeRole(message.member.roles.find(role => role.name === "Delirious 👥"));
                return message.channel.send(message.member.displayName + " is no longer delirious (Timer expired)").then(msg => {
                    msg.delete(4000)
                });
            }, 28800000);
            const exampleEmbed = new Discord.RichEmbed()
                .setColor('#0002ff')
                .setTitle('Such intoxication ')
                .setDescription(message.member.displayName + " is now delirious.")
                .setTimestamp();

            return message.channel.send(exampleEmbed).then(msg => {
                msg.delete(4000)
            });
        }
    }

    if (args[1] === "stimmed") {
        if (message.member.roles.find(role => role.name === "Stimmed 🔋")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Stimmed 🔋"));
            return message.channel.send(message.member.displayName + " is no longer stimmed").then(msg => {
                msg.delete(4000)
            });
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Stimmed 🔋"));

            setTimeout(() => {
                message.member.removeRole(message.member.roles.find(role => role.name === "Stimmed 🔋"));
                return message.channel.send(message.member.displayName + " is now longer stimmed. (Timer expired)").then(msg => {
                    msg.delete(4000)
                });
            }, 28800000);
            const exampleEmbed = new Discord.RichEmbed()
                .setColor('#fbff28')
                .setTitle('Such intoxication ')
                .setDescription(message.member.displayName + " is now stimmed.")
                .setTimestamp();

            return message.channel.send(exampleEmbed).then(msg => {
                msg.delete(4000)
            });
        }
    }

    if (args[1] === "dissod") {
        if (message.member.roles.find(role => role.name === "Dissod 💫")) {
            const addrole = message.member.removeRole(message.member.roles.find(role => role.name === "Dissod 💫"));
            console.log(addrole)

            return message.channel.send(message.member.displayName + " is no longer dissod").then(msg => {
                msg.delete(4000)
            });
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Dissod 💫"));
            const exampleEmbed = new Discord.RichEmbed()
                .setColor('#9d0225')
                .setTitle('Such intoxication ')
                .setDescription(message.member.displayName + " is now dissod.")
                .setTimestamp();

            setTimeout(() => {
                message.member.removeRole(message.member.roles.find(role => role.name === "Dissod 💫"));
                return message.channel.send(message.member.displayName + " is no longer dissod. (Timer expired)");
            }, 28800000);

            return message.channel.send(exampleEmbed).then(msg => {
                msg.delete(4000)
            });
        }
    }

    if (args[1] === "rolling") {
        if (message.member.roles.find(role => role.name === "Rolling 💊")) {
            message.member.removeRole(message.member.roles.find(role => role.name === "Rolling 💊"));
            return message.channel.send(message.member.displayName + " Is no longer rolling");
        } else {
            message.member.addRole(message.guild.roles.find(role => role.name === "Rolling 💊"));
            console.log(chalk.red(message.member.displayName, "Got the role:", chalk.blue("Rolling")));

            setTimeout(() => {
                message.member.removeRole(message.member.roles.find(role => role.name === "Rolling 💊"));
                return message.channels.send(message.member.displayName + " is no longer rolling!")
            }, 28800000);

            const exampleEmbed = new Discord.RichEmbed()
                .setColor('#d77111')
                .setTitle('Such intoxication ')
                .setDescription(message.member.displayName + " is now rolling.")
                .setTimestamp();

            return message.channel.send(exampleEmbed).then(msg => {
                msg.delete(4000)
            });
        }
    }
    if (args[1] === "sober") {
        let roles, array = [
            'Blazed ', 'Tripping 🌈', 'Rolling 💊', 'Nodding 🌠🌠', 'Stimmed 🔋', 'Dissod 💫', 'Delirious 👥',
            'Barred 🎭', 'GABAergic ⚓', 'Drunk 🍺', 'Comedown 💤'
        ];
        for (roles of array) {
            if (message.member.roles.find(role => role.name === roles)) {
                message.member.removeRole(message.member.roles.find(role => role.name === roles));
            } else {
                console.log("Role", roles, "Not deleted. Because", message.member.displayName, "did not have it.");
            }
        }
        return message.channel.send("You're now sober" + " " + message.member.displayName).then(msg => {
            msg.delete(4000)
        });
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
                        return message.channel.send("Added role " + args[3] + " to" + target)
                    }

                } else {
                    return message.channel.send("Role" + " " + args[3] + " not found in roles list.");
                }
            }

        } else {
            return message.channel.send("You do not have permission to assign roles.");
        }
    }
};

module.exports.help = {
    name: "role"
};

