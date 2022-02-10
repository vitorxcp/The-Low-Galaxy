const { APIMessage, Message, Client, Collection } = require('discord.js')
Message.prototype.quote = async function (content, options) {
  const message_reference = {
    message_id: (!!content && !options ? typeof content === 'object' && content.messageID : options && options.messageID) || this.id,
    message_channel: this.channel.id
  }
  const allowed_mentions = {
    parse: ['users', 'roles', 'everyone'],
    replied_user: typeof content === 'object' ? content && +content.mention : options && +options.mention
  }
  let mencione = content === 'object' ? content && +content.mention : options && +options.mention
  const { data: parsed, files } = await APIMessage.create(this, content, options).resolveData().resolveFiles()
  this.client.api.channels[this.channel.id].messages.post({
    data: { ...parsed, message_reference, allowed_mentions, mencione },
    files
  })
}
const Discord = require("discord.js")
const bot = new Discord.Client()
const disbut = require('discord.js-buttons')(bot);
const fs = require('fs');
const db = require("quick.db")
const colors = require("colors")
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir('./comandos', (err, files, message) => {
	if (err) console.error(err);
	let arquivojs = files.filter(f => f.split('.').pop() == 'js');
	arquivojs.forEach((f, i) => {
		let props = require(`./comandos/${f}`);
		console.log(`${colors.cyan(f.split(".")[0])} Carregado (${colors.green("comandos/"+f)}).`);
		bot.commands.set(props.help.name, props);
		props.help.aliases.forEach(alias => {
			bot.aliases.set(alias, props.help.name);
		});
	});
});
setInterval(() => {
  const request = require("request")
		var url = "https://nyantic.vitorxp.repl.co"
		request({
			url: url
		}, async function (error, response, body) {
			if (!error && response.statusCode === 200) {
					console.log("[REQUEST] - On.")
			}else{
console.log("[REQUEST] - Off.")
			}
		})
}, 60000)
bot.on("ready", () => {
  console.log("bot online!")
  setInterval(() => {
    stats = [
      {name: ""+bot.guilds.cache.get("911184989595525150").members.cache.size+" Membros no Servidor!", type:"WATCHING"},
      {name: "A The Low Galaxy é um servidor grande temos sorteios todas as semanas de nitro e sonhos ;3", type: 'STREAMING',url: 'https://www.twitch.tv/vitor_xp_1958'},
      {name: "Ainda estou sendo criado, então qualquer erro ou bugs, contactar: vitor_xp#1958 ;)"}
    ]
    			function setStatus() {
				let randomStatus = Math.floor(Math.random() * stats.length);
				bot.user.setActivity(stats[randomStatus]);
			}
			setStatus();
  }, 15000)
})
bot.on('clickButton', async (button) => {
    if(button.id === "del_s"){
      bot.channels.cache.get(db.fetch("del_channel_id")).messages.cache.get(db.fetch("del_msg_id")).delete()
      button.channel.send("<@"+button.clicker.user.id+"> Você acabou de deletar todos os **Galaxy** de *`"+bot.users.cache.get(db.fetch("del_user")).tag+"`*!")
      db.delete("user_"+bot.users.cache.get(db.fetch("del_user")).id+"")
    }
   if(button.id === "del_n"){
      bot.channels.cache.get(db.fetch("del_channel_id")).messages.cache.get(db.fetch("del_msg_id")).delete()
      button.channel.send("<@"+button.clicker.user.id+"> Você acabou de cancelar!")
    }
  if(button.id === "buy_arma_s"){
    let tem = db.fetch("user_"+button.clicker.user.id+".guild_"+db.fetch("buy_arma_guild_id")+".compras.arma")
    if(tem === "s") {
      if(bot.channels.cache.get(db.fetch("buy_arma_channel_id")).messages.cache.get(db.fetch("buy_arma_msg_id"))) bot.channels.cache.get(db.fetch("buy_arma_channel_id")).messages.cache.get(db.fetch("buy_arma_msg_id")).delete()
   return   button.channel.send("<@"+button.clicker.user.id+"> Compra cancelada! Motivo: `Você já tem a mesma Arma no seu inventário`!")
    }
    let money = db.fetch("user_"+button.clicker.user.id+".guild_"+db.fetch("buy_arma_guild_id")+".dinheiro.coins")
    if(money < 20000) return button.channel.send("<@"+button.clicker.user.id+"> Ops! Você não tem dinheiro suficiente para fazer esta compra! Volte quando você juntar `20.000` Galaxy...")
      if(bot.channels.cache.get(db.fetch("buy_arma_channel_id")).messages.cache.get(db.fetch("buy_arma_msg_id"))) bot.channels.cache.get(db.fetch("buy_arma_channel_id")).messages.cache.get(db.fetch("buy_arma_msg_id")).delete()
      button.channel.send("<@"+button.clicker.user.id+"> Você acabou de comprar uma Arma!")
     db.add("user_"+bot.user.id+".guild_"+db.fetch("buy_arma_guild_id")+".dinheiro.coins", 20000)
    db.set("user_"+button.clicker.user.id+".guild_"+db.fetch("buy_arma_guild_id")+".compras.arma", "s")
        db.subtract("user_"+button.clicker.user.id+".guild_"+db.fetch("buy_arma_guild_id")+".dinheiro.coins", 20000)
    //  db.delete("user_"+bot.users.cache.get(db.fetch("buy_user")).id+"")
    }
   if(button.id === "buy_arma_n"){
 if(bot.channels.cache.get(db.fetch("buy_arma_channel_id")).messages.cache.get(db.fetch("buy_arma_msg_id"))) bot.channels.cache.get(db.fetch("buy_arma_channel_id")).messages.cache.get(db.fetch("buy_arma_msg_id")).delete()
      button.channel.send("<@"+button.clicker.user.id+"> Você acabou de cancelar a compra!")
    }

   if(button.id === "buy_mpgalaxy_s"){
    let tem = db.fetch("user_"+button.clicker.user.id+".guild_"+db.fetch("buy_mpgalaxy_guild_id")+".compras.mpgalaxy")
    if(tem === "s") {
      if(bot.channels.cache.get(db.fetch("buy_mpgalaxy_channel_id")).messages.cache.get(db.fetch("buy_mpgalaxy_msg_id"))) bot.channels.cache.get(db.fetch("buy_mpgalaxy_channel_id")).messages.cache.get(db.fetch("buy_mpgalaxy_msg_id")).delete()
   return   button.channel.send("<@"+button.clicker.user.id+"> Compra cancelada! Motivo: `Você já possuí um Multiplicador de Galaxy no seu inventário`!")
    }
    let money = db.fetch("user_"+button.clicker.user.id+".guild_"+db.fetch("buy_mpgalaxy_guild_id")+".dinheiro.coins")
    if(money < 1000000) return button.channel.send("<@"+button.clicker.user.id+"> Ops! Você não tem dinheiro suficiente para fazer esta compra! Volte quando você juntar `1.000.000` Galaxy...")
      if(bot.channels.cache.get(db.fetch("buy_mpgalaxy_channel_id")).messages.cache.get(db.fetch("buy_mpgalaxy_msg_id"))) bot.channels.cache.get(db.fetch("buy_mpgalaxy_channel_id")).messages.cache.get(db.fetch("buy_mpgalaxy_msg_id")).delete()
      button.channel.send("<@"+button.clicker.user.id+"> Você acabou de comprar um Multiplicador de Galaxy!")
     db.add("user_"+bot.user.id+".guild_"+db.fetch("buy_mpgalaxy_guild_id")+".dinheiro.coins", 1000000)
    db.set("user_"+button.clicker.user.id+".guild_"+db.fetch("buy_mpgalaxy_guild_id")+".compras.mpgalaxy", "s")
        db.subtract("user_"+button.clicker.user.id+".guild_"+db.fetch("buy_mpgalaxy_guild_id")+".dinheiro.coins", 1000000)
    //  db.delete("user_"+bot.users.cache.get(db.fetch("buy_user")).id+"")
    }
   if(button.id === "buy_mpgalaxy_n"){
 if(bot.channels.cache.get(db.fetch("buy_mpgalaxy_channel_id")).messages.cache.get(db.fetch("buy_mpgalaxy_msg_id"))) bot.channels.cache.get(db.fetch("buy_mpgalaxy_channel_id")).messages.cache.get(db.fetch("buy_mpgalaxy_msg_id")).delete()
      button.channel.send("<@"+button.clicker.user.id+"> Você acabou de cancelar a compra!")
    }
})
bot.on("message", async message => {
  if(message.content === "<@"+bot.user.id+">"|message.content === "<@!"+bot.user.id+">") {
    embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/attachments/912633758769877002/938951636829765692/standard.gif")
.setDescription("**Opa, prazer eu sou o *`"+bot.user.username+"`*!**\n**- Meu prefixo para este servidor é *`t.`*, para mais informações ultilize ~~*`t.ajuda`/`t.help`*~~!**\n\n> *Ops! Ainda não tenho um comando de ajuda...*")
return message.quote("<@"+message.author+">", embed) 
  }
  const active = new Map();
 let prefix2 = "t."
	let messageArray = message.content.split(' ');
	let command = messageArray[0];
	if (!message.content.toLowerCase().startsWith(prefix2.toLowerCase())) return;
	const args = message.content.slice(prefix2.length).trim().split(/ +/g);
	const comando = args.shift().toLowerCase();
	let ops = {active: active};
	let arquivocmd =
		bot.commands.get(command.slice(prefix2.length)) ||
		bot.commands.get(bot.aliases.get(command.slice(prefix2.length)));
  if(arquivocmd) {
          let sort = Math.floor(Math.random() * 10);
    if(sort === 1) message.reply("Eu estou a ser criado, então alguns comandos pode vir a dar erros inesperados ou ate mesmo eu não guardar as informações da economia ;3")
  //  message.reply("OUUUUUU PARA AII, Eu estou a ser refeitoooooo, pq n quero ser feio ;3 ksskskskksksksk (REVIRAVOLTASSS TOP 10/10) :)")
    arquivocmd.run(bot, message, args, prefix2)
  }
  if(!arquivocmd){
         let sort = Math.floor(Math.random() * 10);
    if(sort === 1) message.reply("Eu estou a ser criado, então alguns comandos ainda não foram adicionados em mim :(")
   //   message.reply("OUUUUUU PARA AII, Eu estou a ser refeitoooooo, pq n quero ser feio ;3 ksskskskksksksk (REVIRAVOLTASSS TOP 10/10) :)")
    return message.quote("\nOps! Este comando ainda não existe!\n> Querendo dar alguma sugestão? Então envie ela em <#928718761165479996>!")
  }
})
bot.login(process.env.token)
