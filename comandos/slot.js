exports.run = async (bot, message, args) => {
      const moment = require('moment');
moment.locale('pt-BR');
//Antes de tudo vamos fazer direito para n me xingar ai {
  const db = require("quick.db")
  const ping = new Date();
ping.setHours(ping.getHours() - 3);
  const dia = ping.getDate();
	const mes = ping.getMonth()+1;
	const ano = ping.getFullYear();
	const hora = ping.getHours();
	const minutos = ping.getMinutes();
	const segundos = ping.getSeconds();
  data = "`"+dia+"/"+mes+"/"+ano+" ás "+(hora+":"+minutos)+"`"
  money = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins")
   if(!money) return message.quote("Ops! Você não tem dinheiro suficiente para apostar em uma roleta da sorte!")
  if(money < 200) return message.quote("Ops! Você não tem dinheiro suficiente para apostar em uma roleta da sorte!")
  //}
  //Definindo os emojis
  if (args[0] === "u") {
    emojis = [
      "<a:emoji_34:917181658954862642>",
      "<a:emoji_34:917181691179724850>",
      "<a:fire_green:921842388266254468>",
      "<a:fuegorojo:921845059689791528>"
    ]
    
    //Sorteando os emojis
    mig1 = emojis[Math.floor(Math.random() * emojis.length)]
    mig2 = emojis[Math.floor(Math.random() * emojis.length)]
    mig3 = emojis[Math.floor(Math.random() * emojis.length)]
    //Juntando tudo
    let tudo = (mig1+" - "+mig2+" - "+mig3)
    //Vendo se o user ganhou
    let gm = "[😒] `-50` Galaxy."
    if(tudo === "<a:emoji_34:917181658954862642> - <a:emoji_34:917181658954862642> - <a:emoji_34:917181658954862642>" | tudo === "<a:emoji_34:917181691179724850> - <a:emoji_34:917181691179724850> - <a:emoji_34:917181691179724850>") gm = "[✨] `+300` Galaxy."
    if(tudo === "<a:fire_green:921842388266254468> - <a:fire_green:921842388266254468> - <a:fire_green:921842388266254468>" | tudo === "<a:fuegorojo:921845059689791528> - <a:fuegorojo:921845059689791528> - <a:fuegorojo:921845059689791528>") gm = "[✨] `+500` Galaxy."
//Dando e tirando dindin 
    if(gm.includes("50")) {
      db.subtract("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", 50)
      trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
      if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` perdeu **50** para a `Roleta da Sorte`.")
      if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` perdeu **50** para a `Roleta da Sorte`."])
db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
    }
      if(gm.includes("300")) {
        db.add("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", 300)
        trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
        if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` ganhou **300** na `Roleta da Sorte`.")
        if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` ganhou **300** na `Roleta da Sorte`."])
        db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
      }
        if(gm.includes("500")) {
          db.add("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", 500)
          trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
          if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` ganhou **500** na `Roleta da Sorte`.")
          if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` ganhou **500** na `Roleta da Sorte`."])
          db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
        }
    //embeds{
    const Discord = require("discord.js")
    let desg = "`|-=-=-=-X-=-=-=-|`"
    embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Roleta da Sorte:")
      .setTimestamp()
      .setDescription("\n" + desg + "\n**-=[ " + mig1 + " | `...` | `...` ]=-**\n" + desg + "\n")
    let msg = await message.reply(" ", embed)
    setTimeout(() => {
      embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Roleta da Sorte:")
        .setTimestamp()
        .setDescription("\n" + desg + "\n**-=[ " + mig1 + " | " + mig2 + " | `...` ]=-**\n" + desg + "\n")
      msg.edit(embed)
    }, 200)
    setTimeout(() => {
      embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTimestamp()
        .setTitle("Roleta da Sorte:")
        .setDescription("\n" + desg + "\n**-=[ " + mig1 + " | " + mig2 + " | " + mig3 + " ]=-**\n" + desg + "\n> "+gm)
      msg.edit(embed)
    }, 500)
    //}
  }
    if (args[0] === "v") {
    emojis = [
      "<a:emoji_34:917181658954862642>",
      "<a:emoji_34:917181691179724850>",
      "<a:fire_green:921842388266254468>",
      "<a:fuegorojo:921845059689791528>"
    ]
    //Sorteando os emojis
    mig1 = emojis[Math.floor(Math.random() * emojis.length)]
    mig2 = emojis[Math.floor(Math.random() * emojis.length)]
    mig3 = emojis[Math.floor(Math.random() * emojis.length)]
    //Juntando tudo
      valor = args[1]
      if(!valor) return message.reply('Ops, você esqueceu de me fornecer o valor que queres apostar!')
    let tudo = (mig1+" - "+mig2+" - "+mig3)
    //Vendo se o user ganhou
    let gm = "[😒] `-"+valor.toLocaleString()+"` Galaxy."
    if(tudo === "<a:emoji_34:917181658954862642> - <a:emoji_34:917181658954862642> - <a:emoji_34:917181658954862642>" | tudo === "<a:emoji_34:917181691179724850> - <a:emoji_34:917181691179724850> - <a:emoji_34:917181691179724850>") gm = "[✨] `+"+(valor+300)+"` Galaxy."
    if(tudo === "<a:fire_green:921842388266254468> - <a:fire_green:921842388266254468> - <a:fire_green:921842388266254468>" | tudo === "<a:fuegorojo:921845059689791528> - <a:fuegorojo:921845059689791528> - <a:fuegorojo:921845059689791528>") gm = "[✨] `+"+(valor*3)+"` Galaxy."
//Dando e tirando dindin 
    if(gm.includes(args[1])) {
      db.subtract("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", valor)
      trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
      if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` perdeu **"+valor+"** para a `Roleta da Sorte`.")
      if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` perdeu **"+valor+"** para a `Roleta da Sorte`."])
      db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
    } 
      if(gm.includes((valor+300))) {
        db.add("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", (valor+300))
        trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
        if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` ganhou **"+(valor+300)+"** na `Roleta da Sorte`.")
        if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` ganhou **"+(valor+300)+"** na `Roleta da Sorte`."])
        db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
      }
        if(gm.includes((valor*3))) {
          db.add("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", (valor*3))
          trns = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".transações")
          if(trns) db.push("user_"+message.author.id+".guild_"+message.guild.id+".transações", "["+data+"] 🪙 `"+message.author.tag+"` ganhou **"+(valor*3)+"** na `Roleta da Sorte`.")
          if(!trns) db.set("user_"+message.author.id+".guild_"+message.guild.id+".transações", ["["+data+"] 🪙 `"+message.author.tag+"` ganhou **"+(valor*3)+"** na `Roleta da Sorte`."])
          db.add("user_"+message.author.id+".guild_"+message.guild.id+".transações_size", 1)
        }
    //embeds{
    const Discord = require("discord.js")
    let desg = "`|-=-=-=-X-=-=-=-|`"
    embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Roleta da Sorte:")
      .setTimestamp()
      .setDescription("\n" + desg + "\n**-=[ " + mig1 + " | `...` | `...` ]=-**\n" + desg + "\n")
    let msg = await message.reply(" ", embed)
    setTimeout(() => {
      embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Roleta da Sorte:")
        .setTimestamp()
        .setDescription("\n" + desg + "\n**-=[ " + mig1 + " | " + mig2 + " | `...` ]=-**\n" + desg + "\n")
      msg.edit(embed)
    }, 200)
    setTimeout(() => {
      embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTimestamp()
        .setTitle("Roleta da Sorte:")
        .setDescription("\n" + desg + "\n**-=[ " + mig1 + " | " + mig2 + " | " + mig3 + " ]=-**\n" + desg + "\n> "+gm)
      msg.edit(embed)
    }, 500)
    //}
  }
  if(args[0] === "u" || args[0] === "v"){} else {
    const Discord = require("discord.js")
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .setTitle("Roleta da Sorte!")
      .setDescription("**Nesta Roleta você tem a chance de ganhar muitos *Galaxy's* dependendo da sua sorte ;3**\n\n> Para jogar use *`t.slot u`*! Cada rodada custa *`50`* Galaxy.\nQuerendo apostar mesmooo? Utilize `t.slot v <valor>`. Cada rodada custa o valor que você colocar no <valor>!\n Querendo ver os preços de tudo? Então Utilize `t.slots`!")
    message.reply(" ", embed)
  }
}
exports.help = { name: "slot", aliases: [] }