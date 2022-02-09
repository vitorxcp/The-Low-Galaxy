exports.run = async (bot,message,args) => {
  const disbut = require("discord.js-buttons");
  const Discord = require("discord.js")
//  if(message.author.id !== "518862457876250625") return message.reply("Comando em fase final de teste! (quando aparece esta mensagem e para prevenir futuros erros)")
  embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
    .setTitle("**    *`🪙 Lojinha`*:**")
  .addField("🔫 Arma (`t.comprar arma`) - *`0`* Galaxy's.", "> Esta arma te dará `+ 15%` de chance de não ser pego pela policia!")
     .addField("✨ Multiplicados de Galaxy's (`t.comprar mpgalaxy`) - *`1.000.000`* Galaxy's.", "> Este item te dará `2x` mais Galaxy's!")
  .setFooter("Paginas 1 / 1")
    let menu = new disbut.MessageButton()
  .setStyle('blurple')
  .setID("shop_pagante") 
  .setLabel('◀️')
    .setDisabled()
    let info = new disbut.MessageButton()
  .setStyle('blurple')
  .setID("shop_pagprox") 
  .setLabel('▶️')
    .setDisabled()
message.channel.send("<@"+message.author+">", {
   buttons: [menu, info], embed: embed
})
}
exports.help = {
  name: "shop",
  aliases: ["loja", "lojinha"]
} 