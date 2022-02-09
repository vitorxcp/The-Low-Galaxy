exports.run = async (bot,message,args) => {
    const disbut = require("discord.js-buttons");
  const db = require("quick.db")
  const Discord = require("discord.js")
  if(message.author.id !== "518862457876250625") return message.reply("Você não tem permissão para executar este comando rapazinho ;3")
   const user = message.mentions.users.first() || bot.users.cache.get(args[0])
  if(!user) return message.quote("Geito de se usar e `t.deletar <@user>`")
   let del_s = new disbut.MessageButton()
  .setStyle('green')
  .setID("del_s") 
  .setLabel('Deletar')
   let del_n = new disbut.MessageButton()
  .setStyle('red')
  .setID("del_n") 
  .setLabel('Cancelar')
  let total = db.fetch("user_"+user.id+".guild_"+message.guild.id+".dinheiro.coins")
if(!total) total = 0
  if(user.id === message.author.id) {
    db.set("del_user", user.id)
    return message.channel.send("<@"+message.author+"> Você tens certeza que queres deletar e jogar seus ***`"+total.toLocaleString()+"`* Galaxy** fora?", {
   buttons: [del_s, del_n]
}).then(msg => {
      db.set("del_msg_id", msg.id)
        db.set("del_channel_id", msg.channel.id)
})
  } else {
     db.set("del_user", user.id)
    return message.channel.send("<@"+message.author+"> Você tens certeza que queres deletar os ***`"+total.toLocaleString()+"`* Galaxy** de *`"+user.tag+"`*?", {
   buttons: [del_s, del_n]
}).then(msg => {
      db.set("del_msg_id", msg.id)
      db.set("del_channel_id", msg.channel.id)
})
  }
}
exports.help = {
  name: "deletar", aliases:[]
}