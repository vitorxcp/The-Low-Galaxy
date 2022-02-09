exports.run = async(bot,message,args) => {
  const Discord = require("discord.js")
  const ms = require("parse-ms")
  let time = ms(bot.uptime)
  message.quote("**`-` Meu Ping: *`"+bot.ws.ping+"`*ms!**\n**`-` Online há `"+time.hours+"` Horas `"+time.minutes+"` Minutos `"+time.seconds+"` Segundos!**")
}
exports.help = {
  name: "info", aliases: ["botinfo", "about", "informações", "informaçoes", "informacoes", "infobot"]
}