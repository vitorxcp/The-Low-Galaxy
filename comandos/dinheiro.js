exports.run = async (bot, message, args) => {
const db = require("quick.db")
const Discord = require("discord.js")
const user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
   //       if(message.author.id !== "518862457876250625") return message.reply("Comando em fase final de teste!")
let dinheiro = db.fetch("user_"+user.id+".guild_"+message.guild.id+".dinheiro.coins")
if(!dinheiro) dinheiro = 0
if(user.id === message.author.id){
return message.quote("> <@"+message.author+"> você tem **"+dinheiro.toLocaleString()+"** Galaxy.")
} else {
return message.quote("> <@"+message.author+">, ***`"+user.username+"`*** tem **"+dinheiro.toLocaleString()+"** Galaxy.")
}
}
exports.help = {
name: "dinheiro",
aliases: ["coins", "atm", "money", "galaxy"]
}
