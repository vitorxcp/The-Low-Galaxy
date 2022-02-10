exports.run = async ( bot, message, args) => {
const Discord = require("discord.js")
  embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setTitle('Valores da Roleta:')
    .setDescription("A cada conjunto de emojis você ganha um valor específico!\n(mais para frente teremos mais emojis).")
  .addField("<a:emoji_34:917181658954862642><a:emoji_34:917181658954862642><a:emoji_34:917181658954862642>/<a:emoji_34:917181691179724850><a:emoji_34:917181691179724850><a:emoji_34:917181691179724850>", "> Ganho de *`300`* Galaxy!")
  .addField("<a:fire_green:921842388266254468><a:fire_green:921842388266254468><a:fire_green:921842388266254468>/<a:fuegorojo:921845059689791528><a:fuegorojo:921845059689791528><a:fuegorojo:921845059689791528>", "> Ganho de *`500`* Galaxy!")
  message.quote(embed)
}
exports.help = {
  name: "slots", aliases: []
}