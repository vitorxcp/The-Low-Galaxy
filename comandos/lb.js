const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (bot, message, args) => {
    let money = db.all(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";
    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username
        content += `${i+1}. ${user} ~ ${money[i].data}\n`
      }
    const embed = new Discord.RichEmbed()
    .setDescription(`**Ranks**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  } 
  exports.help = {
  name:"ranwefrefrek",
  aliases: ["leaefwefder"]
}