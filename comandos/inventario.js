exports.run = async(bot, message, args) => {
  const Discord = require("discord.js")
  const db = require("quick.db")
 let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
  let arma = db.fetch("user_"+user.id+".guild_"+message.guild.id+".compras.arma")
    let multp = db.fetch("user_"+user.id+".guild_"+message.guild.id+".compras.mpgalaxy")
  embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
if(user.id === message.author.id){
  embed.setTitle("Inventário de Itens:")
}else{
  embed.setTitle("Inventário de Itens de `"+user.tag+"`:")
}
  if(((arma?arma:"n")+""+(multp?multp:"n")) === "nn"){
    embed.setDescription("<:perrolloros:921135593696669717> Vazio, igual a minha conta bancaria! <:perrolloros:921135593696669717>")
  }
  if(arma === "s"){
    embed.addField("🔫 Arma", "> Esta arma dá `+15%` de chance de não ser pego pela policia!")
  }
  if(multp === "s"){
    embed.addField("✨ Multiplicador de Galaxy's", "> Este item dá `2x` mais Galaxy's nos comandos de economia!")
  }
  message.reply(" ", embed)
}
exports.help = {
  name: "inventário", aliases: ["inventario", "inv"]
}