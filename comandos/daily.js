exports.run = async(bot, message,args) => {
    const db = require("quick.db")
  const Discord = require("discord.js")
  const user = message.author
 const ms = require('parse-ms')
  const ms2 = require("ms")
   const moment = require('moment');
moment.locale('pt-BR');
   let timeout = 86400000 
      //    if(message.author.id !== "518862457876250625") return message.reply("Comando em fase final de teste!")
let daily_time = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".timeout.daily")
    if (daily_time !== null && timeout - (Date.now() - daily_time) > 0) {
        let time1 = ms(timeout - (Date.now() - daily_time))
     let time = "*`"+time1.hours+"`* Horas, *`"+time1.minutes+"`* Minutos e *`"+time1.seconds+"`* Segundos"
   // return message.quote("<@"+message.author+">\n Você tem quem esperar __***`"+time.hours+"`* Horas, *`"+time.minutes+"`* Minutos e *`"+time.seconds+"`* Segundos**__!\n > **Você pode pegar o `Daily` á cada *`24`* horas.**")
      embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .setDescription("**-** Ops! Você poderá pegar o seu proximo *`Daily`* em exatamente **"+time+"**!\n\n> *Você pode pegar o `Daily` Diariamente ;3*")
      message.reply(" ", embed)
    } else {
       let tem3 = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".compras.mpgalaxy")
      let total = Math.floor(Math.random() * 20000) + 1;
       if(tem3 === "s") total = (total*2)
       multp = ""
      if(tem3 === "s") multp = "\n\n Ganho de `2x` no Work!"
      embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTimestamp()
    .setDescription("✨ <@"+message.author+">, Você acabou de ganhar ***`"+total.toLocaleString()+"`* Galaxy**! ✨"+multp+"")
      message.reply(" ", embed)
      db.add("user_"+user.id+".guild_"+message.guild.id+".dinheiro.coins", total)
      db.set("user_"+user.id+".guild_"+message.guild.id+".timeout.daily", Date.now())
    }
}
exports.help = {
  name:"daily", 
  aliases: ["diário", "diario"]
}