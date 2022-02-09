//Eval é um comando poderoso, use com sabedoria.
    const Discord = require('discord.js')
    const moment = require('moment');
moment.locale('pt-BR');
const db = require("quick.db")
const ms2 = require("ms")
    exports.run = async (bot, message, args) => {
        if(message.author.id !== "518862457876250625") return message.reply("Você não tem permissão para executar este comando rapazinho ;3")
  try{
			    let nylindao = await args.join(" ");
        let nytotoso = await eval(nylindao);
        if (typeof nytotoso !== 'string')
            nytotoso = require('util').inspect(nytotoso, { depth: 0 });
        let embed = new Discord.MessageEmbed()
        .setAuthor('Eval')
        .setColor('BLACK')
         .setDescription("> **📥 Código:**\n```javascript\n"+nylindao+"\n```\n> **📤 Resultado:**\n```js\n"+nytotoso+"\n```")
  message.reply("", embed).catch(err => {
		 let embed3 = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setDescription("```js\n"+err+"\n```")
    message.channel.send(embed3)
	})
  }catch(err) {
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setDescription("```js\n"+err+"\n```")
    message.channel.send(embed)
  }
}
exports.help = { 
    name: 'eval',
		aliases: ["e", "codigo", "EVAL", "CODIGO", "E"]
}