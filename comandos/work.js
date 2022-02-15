exports.run = async(bot, message,args) => {
    const db = require("quick.db")
  const Discord = require("discord.js")
   const ping = new Date();
ping.setHours(ping.getHours() - 3);
  const dia = ping.getDate();
	const mes = ping.getMonth()+1;
	const ano = ping.getFullYear();
	const hora = ping.getHours();
	const minutos = ping.getMinutes();
	const segundos = ping.getSeconds();
  data = "`"+dia+"/"+mes+"/"+ano+" ás "+(hora+":"+minutos)+"`"
  const user = message.author
 const ms = require('parse-ms')
   let timeout = 28800000 
    //      if(message.author.id !== "518862457876250625") return message.reply("Comando em fase final de teste!")
let daily_time = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".timeout.work")
    if (daily_time !== null && timeout - (Date.now() - daily_time) > 0) {
           let time1 = ms(timeout - (Date.now() - daily_time))
     let time = "*`"+time1.hours+"`* Horas, *`"+time1.minutes+"`* Minutos e *`"+time1.seconds+"`* Segundos"
      embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .setDescription("<:xn:942904768144244776> | Ops! Você poderá trabalhar novamente em **"+time+"**!\n\n> *Você pode trabalhar a cada 8 Horas no dia!*")
      message.reply(" ", embed)
    } else {
       let tem3 = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".compras.mpgalaxy")
      let total = Math.floor(Math.random() * 12000) + 1;
        if(tem3 === "s") total = (total*2)
      multp = ""
      if(tem3 === "s") multp = "\n\n Ganho de `2x` no Work!"
      message.quote("✨ <@"+message.author+">, Você acabou de ganhar ***`"+total.toLocaleString()+"`* Galaxy** no seu trabalho! ✨"+multp+"")
      db.add("user_"+user.id+".guild_"+message.guild.id+".dinheiro.coins", total)
      db.set("user_"+user.id+".guild_"+message.guild.id+".timeout.work", Date.now())
      trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
      if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` ganhou **"+total+"** no seu trabalho.")
      if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` ganhou **"+total+"** no seu trabalho."])
db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
    }
}
exports.help = {
  name:"work", 
  aliases: ["trabalhar", "trabalho"]
}