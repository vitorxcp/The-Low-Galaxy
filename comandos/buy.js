exports.run = async (bot,message,args) => {
 // if(message.author.id !== "518862457876250625") return message.reply("Comando em fase final de teste! (quando aparece esta mensagem e para prevenir futuros erros)")
   const db = require("quick.db")
  const Discord = require("discord.js")
 const ms = require('parse-ms')
  const ms2 = require("ms")
   const moment = require('moment');
moment.locale('pt-BR');
    const disbut = require("discord.js-buttons");
if(args[0] === "arma"){
  let money = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins")
    if(!money) return message.quote("Ops! Você não tem dinheiro suficiente para fazer compras (no caso você esta pobre)!")
  if(money < 20000) return message.quote("Ops! Você não tem dinheiro suficiente para fazer esta compra! Volte quando você juntar `20.000` Galaxy...")
   let del_s = new disbut.MessageButton()
  .setStyle('green')
  .setID("buy_arma_s") 
  .setLabel('Confirmar')
   let del_n = new disbut.MessageButton()
  .setStyle('red')
  .setID("buy_arma_n") 
  .setLabel('Cancelar')
  message.channel.send("<@"+message.author+"> Você tens certeza que queres comprar uma Arma por ***`20,000`* Galaxy**?", {
   buttons: [del_s, del_n]
}).then(msg => {
      db.set("buy_arma_msg_id", msg.id)
        db.set("buy_arma_channel_id", msg.channel.id)
    db.set("buy_arma_guild_id", message.guild.id)
})
}
  if(args[0] === "mpgalaxy"){
  let money = db.fetch("user_"+message.author.id+".guild_"+message.guild.id+".dinheiro.coins")
    if(!money) return message.quote("Ops! Você não tem dinheiro suficiente para fazer compras (no caso você esta pobre)!")
  if(money < 20000) return message.quote("Ops! Você não tem dinheiro suficiente para fazer esta compra! Volte quando você juntar `1.000.000` Galaxy...")
   let del_s = new disbut.MessageButton()
  .setStyle('green')
  .setID("buy_mpgalaxy_s") 
  .setLabel('Confirmar')
   let del_n = new disbut.MessageButton()
  .setStyle('red')
  .setID("buy_mpgalaxy_n") 
  .setLabel('Cancelar')
  message.channel.send("<@"+message.author+"> Você tens certeza que queres comprar um Multiplicador de Galaxy por ***`1.000,000`* Galaxy**?", {
   buttons: [del_s, del_n]
}).then(msg => {
      db.set("buy_mpgalaxy_msg_id", msg.id)
        db.set("buy_mpgalaxy_channel_id", msg.channel.id)
    db.set("buy_mpgalaxy_guild_id", message.guild.id)
})
}
  if(args[0] === "arma" | args[0] === "mpgalaxy"){}else{
  embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription("**Algo de errado não está certo! Use `t.comprar <item>`!**\n\n> *Caso o item que você escreveu não apareceu, verifique os itens na minha lojinha (`t.lojinha`)!*")
  message.reply(" ", embed)
}
}
exports.help = {
  name: "buy", aliases:["comprar"]
}