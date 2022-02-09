exports.run = async(bot, message,args) => {
    const db = require("quick.db")
  const Discord = require("discord.js")
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
      .setDescription("**-** Ops! Você poderá trabalhar novamente em **"+time+"**!\n\n> *Você pode 'trabalhar' a cada 8 Horas ;3*")
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
    }
}
exports.help = {
  name:"work", 
  aliases: ["trabalhar", "trabalho"]
}