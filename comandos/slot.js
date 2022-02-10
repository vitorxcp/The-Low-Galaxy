exports.run = async (bot, message, args) => {
//Antes de tudo vamos fazer direito para n me xingar ai {
  const db = require("quick.db")
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
    if(gm.includes("50")) db.subtract("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", 50)
      if(gm.includes("300")) db.add("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", 300)
        if(gm.includes("500")) db.add("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins", 500)
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
    }, 500)
    setTimeout(() => {
      embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTimestamp()
        .setTitle("Roleta da Sorte:")
        .setDescription("\n" + desg + "\n**-=[ " + mig1 + " | " + mig2 + " | " + mig3 + " ]=-**\n" + desg + "\n> "+gm)
      msg.edit(embed)
    }, 1000)
    //}
  } else {
    const Discord = require("discord.js")
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .setTitle("Roleta da Sorte!")
      .setDescription("**Nesta Roleta você tem a chance de ganhar muitos *Galaxy's* dependendo da sua sorte ;3**\n\n> Para jogar use *`t.slot u`*! Cada rodada custa *`50`* Galaxy.")
    message.reply(" ", embed)
  }
}
exports.help = { name: "slot", aliases: [] }