//減
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import { bot_tag, owner_tag } from "../../database/main";

export default {
  category: '數學',
  description: '求指定兩數之差.',
  aliases: ['-'],
  
  slash: 'both',
  testOnly: false,
  guildOnly: false,
  ownerOnly: false,

  minArgs: 2,
  maxArgs: 2,
  expectedArgs: '<數字> <數字>',
  expectedArgsTypes: ['NUMBER', 'NUMBER'],
  options: [
    {
      name: '數字1',
      description: '數字1',
      required: true,
      type: 10
    },
    {
      name: '數字2',
      description: '數字2',
      required: true,
      type: 10
    }
  ],
  callback: ({ message, interaction, args, client }) => {
    const bot_Avatar = client.user?.displayAvatarURL({dynamic: true})
    const r1 = Number(args[0])
    const r2 = Number(args[1])
    const e1 = args[0]
    const e2 = args[1]

    if(isNaN(r1)) {
      let em = new MessageEmbed()
      .setTitle(`<a:WM_no:909050182467997708>Error`)
      .setDescription(`您輸入的'數字1'為'${e1}',但他不是一個數字,請輸入數字.`)
      .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
      return em
    }
    if(isNaN(r2)) {
      let em = new MessageEmbed()
      .setTitle(`<a:WM_no:909050182467997708>Error`)
      .setDescription(`您輸入的'數字2'為'${e2}',但他不是一個數字,請輸入數字.`)
      .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
      return em
    }
    if(r1>r2) {
      let ans = r1 - r2
      let em = new MessageEmbed()
        .setTitle(`${r1} - ${r2} =`)
        .setDescription(`**${ans}**`)
		    .setColor('RANDOM')
		    .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        return em
    } else {
      if(r2>r1) {
        let ans = r2 - r1
        let em = new MessageEmbed()
        .setTitle(`${r2} - ${r1} =`)
        .setDescription(`**${ans}**`)
		    .setColor('RANDOM')
		    .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        return em
      } else {
        let em = new MessageEmbed()
        .setTitle(`${r1} - ${r2} =`)
        .setDescription('**0**')
		    .setColor('RANDOM')
		    .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        return em
      }
    }
  }
} as ICommand