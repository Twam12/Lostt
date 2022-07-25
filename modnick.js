const Discord = require('discord.js');
module.exports = {
  name: 'nickname',
  description: "this is a gamertag command",
  
  async execute(message, args, Discord){
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You don't have perms to use this command!")

    let user = message.mentions.users.first();
    if(!user) return message.channel.send("You need to mention a user!")

    let nick = args.slice(1).join(" ")
    if(!nick) return message.channel.send("You need to input a nickname!")

    let member = message.guild.members.cache.get(user.id)
    await member.setNickname(nick).catch(err => message.channel.send({embed:{color:"RED",description:`${err}`}}));
    let embed = new Discord.MessageEmbed()
    .setTitle("Nickname Changed")
    .setDescription(`${user.tag}'s nickname was changed to ${nick}'`)
    .setColor("GREEN")

    message.channel.send(embed)
}
}


