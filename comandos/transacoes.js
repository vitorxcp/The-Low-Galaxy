exports.run = async (bot, message, args) => {
  const db = require("quick.db")
  const Discord = require("discord.js")
  embed = new Discord.MessageEmbed()
  .setTitle("Suas Transações no Bot:")
  .setDescription("<:perrolloros:921135593696669717> Vazio, igual a minha conta bancaria! <:perrolloros:921135593696669717>")
  message.quote(embed)
}
exports.help = {
  name: "transaçoes", aliases:["transações"]
}