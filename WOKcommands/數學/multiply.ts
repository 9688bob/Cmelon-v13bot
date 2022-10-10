//乘
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import { bot_tag, owner_tag } from "../../database/main";


export default {
    category: '數學',
    description: '相乘',
    aliases: ['*'],

    slash: 'both',
    testOnly: false,
    guildOnly: false,
    ownerOnly: false,

    minArgs: 2,
    maxArgs: 2,
    expectedArgs: '<數字1> <數字2>',
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

    callback: ({ args, message, client }) => {
        const bot_Avatar = client.user?.displayAvatarURL({dynamic: true})
        const K = Number(4000000000000000)

        const M1 = Number(args[0])
        const M2 = Number(args[1])
        const e1 = args[0]
        const e2 = args[1]

        if(isNaN(M1)) {
            let em = new MessageEmbed()
            .setTitle(`<a:WM_no:909050182467997708>Error`)
            .setDescription(`您輸入的'數字1'為'${e1}',但他不是一個數字,請輸入數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(isNaN(M2)) {
            let em = new MessageEmbed()
            .setTitle(`<a:WM_no:909050182467997708>Error`)
            .setDescription(`您輸入的'數字2'為'${e2}',但他不是一個數字,請輸入數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(M1 == 0 || M2 == 0) {
            let ans = 0
            let em = new MessageEmbed()
            .setTitle(`${M1} x ${M2} =`)
            .setDescription(`**${ans}**`)
            .setColor('RANDOM')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(M1 > 0 || M1 < 0) {
            let a1 = M1 * M2 * K
            let ans = a1 / K
            let em = new MessageEmbed()
            .setTitle(`${M1} x ${M2} =`)
            .setDescription(`**${ans}**`)
            .setColor('RANDOM')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
    }
} as ICommand