exports.run = async(bot, message,args) => {
  const db = require("quick.db")
const Discord = require("discord.js")
const ms = require('parse-ms')
 const ping = new Date();
ping.setHours(ping.getHours() - 3);
const dia = ping.getDate();
const mes = ping.getMonth()+1;
const ano = ping.getFullYear();
const hora = ping.getHours();
const minutos = ping.getMinutes();
const segundos = ping.getSeconds();
data = "`"+dia+"/"+mes+"/"+ano+" ás "+(hora+":"+minutos)+"`"
const ms2 = require("ms")
 const moment = require('moment');
moment.locale('pt-BR');
if(!db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins")) return message.quote("Ops! Você não tem dinheiro suficiente!")
 let timeout = 28800000 
const user = message.mentions.users.first() || bot.users.cache.get(args[0])
if(!user) return message.quote("Geito de se usar e `t.crime <@user>`")
if(user.id === message.author.id) return message.quote("Você não pode roubar você mesmo!")
if(!db.fetch("user_"+user.id+".guild_"+message.guild.id+".dinheiro.coins")) return message.quote("Ops! Este usuário não tem dinheiro suficiente!")
       // if(message.author.id !== "518862457876250625") return message.reply("Comando em fase final de teste! (quando aparece esta mensagem e para prevenir futuros erros)")
let daily_time = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".timeout.crime")
  if (daily_time !== null && timeout - (Date.now() - daily_time) > 0) {
      let time1 = ms(timeout - (Date.now() - daily_time))
   let time = "*`"+time1.hours+"`* Horas, *`"+time1.minutes+"`* Minutos e *`"+time1.seconds+"`* Segundos"
    embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setDescription("**-** Ops! Você só poderá fazer novamente o famoso '*`Crime`*' em **"+time+"**!\n\n> *Você fazer o famoso '`Crime`' a cada 8 Horas ;3*")
    message.reply(" ", embed)
  } else {
        let tem = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".compras.arma")
  if(tem === "s") tem = 3
    if(!tem) tem = 5
         let tem3 = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".compras.mpgalaxy")
    let porcentagem = Math.floor(Math.random() * tem);
    let total = Math.floor(Math.random() * 7000);
    if(tem3 === "s") total = (total*2)
    let totaltirado = Math.floor(Math.random() * 4000);
    multp = ""
    if(tem3 === "s") multp = "\n\n Ganho de `2x` no Work!"
    if(porcentagem === 1){
        embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
  .setDescription("✨ <@"+message.author+">, Você acabou de roubar `"+user.username+"` e ganhou ***`"+total.toLocaleString()+"`* Galaxy**! ✨"+multp+"")
    message.reply(" ", embed)
    db.add("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", total)
      db.subtract("user_"+user.id+".guild_"+message.guild.id+".dinheiro.coins", total)
    db.set("user_"+message.author.id+".guild_"+message.guild.id+".timeout.crime", Date.now())
      trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
      if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` roubou **"+total.toLocaleString()+"** de `"+user.tag+"`(`"+user.id+"`).")
      if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` roubou **"+total.toLocaleString()+"** de `"+user.tag+"`(`"+user.id+"`)."])
  
      if(trns) db.push("user_"+user.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"`(`"+user.id+"`) acabou roubando **"+total.toLocaleString()+"** de sua conta!")
      if(!trns) db.set("user_"+user.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"`(`"+user.id+"`) acabou roubando **"+total.toLocaleString()+"** de sua conta!"])
  
  
      db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
    } else {
       embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
  .setDescription("✨ <@"+message.author+">, Você acabou de ser pego pela policia e acabou pagando uma fiança de ***"+totaltirado.toLocaleString()+"* Galaxy**!")
    message.reply(" ", embed)
  // db.add("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", total)
      db.subtract("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", totaltirado)
      db.add("user_"+bot.user.id+".guild_"+message.guild.id+".dinheiro.coins", totaltirado)
    db.set("user_"+message.author.id+".guild_"+message.guild.id+".timeout.crime", Date.now())
      trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
    if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` pagou **"+totaltirado+"** para sua fiança.")
    if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` pagou **"+totaltirado+"** para sua fiança."])
db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
    }
  }
}
exports.help = {
name:"crime", 
aliases: ["rob", "roubar"]
}