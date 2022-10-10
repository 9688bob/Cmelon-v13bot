//除
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import { bot_tag, owner_tag } from "../../database/main";

export default {
    category: '數學',
    description: '除法',
    aliases: ['/'],

    slash: 'both',
    testOnly: false,
    guildOnly: false,
    ownerOnly: false,

    minArgs: 2,
    maxArgs: 2,
    expectedArgs: '<被除數> <除數>',
    expectedArgsTypes: ['NUMBER', 'NUMBER'],
    options: [
        {
            name: '被除數',
            description: '被除數',
            required: true,
            type: 10,
        },
        {
            name: '除數',
            description: '除數',
            required: true,
            type: 10,
        }
    ],
    
    callback: ({ args, interaction, message, client }) => {
        const bot_Avatar = client.user?.displayAvatarURL({dynamic: true})
        const number1 = Number(args[0])
        const number2 = Number(args[1])
        const error1 = args[0]
        const error2 = args[1]

        if(isNaN(number1)) {
            let em = new MessageEmbed()
            .setTitle(`<a:WM_no:909050182467997708>Error`)
            .setDescription(`您輸入的'被除數'為'${error1}',但他不是一個數字,請輸入數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(isNaN(number2)) {
            let em = new MessageEmbed()
            .setTitle(`<a:WM_no:909050182467997708>Error`)
            .setDescription(`您輸入的'除數'為'${error2}',但他不是一個數字,請輸入數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(number2 == 0) {
            let em = new MessageEmbed()
            .setTitle(`${number1} ÷ ${number2} =`)
            .setDescription(`<a:WM_no:909050182467997708>**Error**\n**被除數 不可為0**`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(number1 > 0 || number1 < 0 || number1 == 0 || number2 > 0 || number2 < 0) {
            let ans = number1 / number2
            let em = new MessageEmbed()
            .setTitle(`${number1} ÷ ${number2} =`)
            .setDescription(`**${ans}**`)
		    .setColor('RANDOM')
		    .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        
    }
} as ICommand