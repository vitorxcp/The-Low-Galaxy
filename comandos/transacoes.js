exports.run = async (bot, message, args) => {
  const db = require("quick.db")
  const Discord = require("discord.js")
  let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
const transações = db.fetch("user_"+user.id+".guild_"+message.guild.id+".transações")
  if(!transações){ 
  embed = new Discord.MessageEmbed()
   if(user.id === message.author.id){
          embed.setTitle("Suas Transações no Bot:")
          embed.setDescription("<:perrolloros:921135593696669717> Vazio, igual a minha conta bancaria! <:perrolloros:921135593696669717>")
        } else {
          embed.setTitle("Transações de `"+user.tag+"`:")
          embed.setDescription("<:perrolloros:921135593696669717> Vazio, igual a minha conta bancaria! <:perrolloros:921135593696669717>")
        }
  message.quote(embed)
  } else{
    total = db.fetch("user_"+user.id+".guild_"+message.guild.id+".transações_size")
   // console.log()
    if(!total) total = 0
    let i0 = 0;
    let i1 = 10;
    let page = 1;

    let description =
      transações
        .map(r => r)
        .map((r, i) => ""+r+"")
        .slice(0, 10)
        .join("\n");

    let embed = new Discord.MessageEmbed()
      .setAuthor(
        user.tag,
       user.displayAvatarURL({ dynamic: true })
      )
      .setColor("GREEN")
      .setFooter(""+total+" Transações - Pagina "+page+"/"+Math.ceil(total / 10)+".")
     if(user.id === message.author.id){
          embed.setTitle("Suas Transações no Bot:")
        } else {
          embed.setTitle("Transações de `"+user.tag+"`:")
        }
          embed.setDescription(description);

    let msg = await message.channel.send(embed);

    await msg.react("⬅");
    await msg.react("➡");

    let collector = msg.createReactionCollector(
      (reaction, user) => user.id === message.author.id
    );

    collector.on("collect", async (reaction, user) => {
      if (reaction._emoji.name === "⬅") {
        reaction.users.remove(message.author.id);
        i0 = i0 - 10;
        i1 = i1 - 10;
        page = page - 1;
        if (i0 + 1 < 0) {
          console.log(i0)
          embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle("Ops, tente ir para frente!")
          .setTimestamp()
          return msg.edit(embed);
        }
        if (!i0 || !i1) {
        }

        description =
        transações
        .map(r => r)
        .map((r, i) => ""+r+"")
            .slice(i0, i1)
            .join("\n");
        embed
        .setColor("GREEN")
        .setFooter(""+total+" Transações - Pagina "+page+"/"+Math.ceil(total / 10)+".")
        if(user.id === message.author.id){
          embed.setTitle("Suas Transações no Bot:")
        } else {
          embed.setTitle("Transações de `"+user.tag+"`:")
        }
          embed.setDescription(description);

        msg.edit(embed);
      }

      if (reaction._emoji.name === "➡") {
        reaction.users.remove(message.author.id);
        i0 = i0 + 10;
        i1 = i1 + 10;
        page = page + 1;
        if (i1 > total + 10) {
            embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle("Opa, Tente voltar para traz!")
          .setTimestamp()
          return msg.edit(embed);
        }
        if (!i0 || !i1) {
       //   return msg.delete();
        }

        description =
        transações
        .map(r => r)
        .map((r, i) => ""+r+"")
            .slice(i0, i1)
            .join("\n");
        embed
        .setColor("GREEN")
        .setFooter(""+total+" Transações - Pagina "+page+"/"+Math.ceil(total / 10)+".")
         if(user.id === message.author.id){
          embed.setTitle("Suas Transações no Bot:")
        } else {
          embed.setTitle("Transações de `"+user.tag+"`:")
        }
          embed.setDescription(description);

        msg.edit(embed);
      }
    });
  }
  
}
exports.help = {
  name: "transaçoes", aliases:["transações"]
}