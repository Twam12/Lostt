const Discord = require('discord.js')
require("discord-reply")

module.exports = {
  name: 'ping',
  async execute(message, args, Discord){
    const ping = new Discord.MessageEmbed()
    .setTitle("Pong🏓")
    message.lineReply(ping)
  }
}