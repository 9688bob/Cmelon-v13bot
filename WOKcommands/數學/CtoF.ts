import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import { bot_tag, owner_tag } from "../../database/main";

export default {
    category: '數學',
    description: '攝氏轉華氏',
    aliases: ['c2f'],

    slash: 'both',
    testOnly: false,
    guildOnly: false,
    ownerOnly: false,

    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<攝氏度>',
    expectedArgsTypes: ['NUMBER'],
    options: [
        {
            name: '攝氏',
            description: '攝氏',
            required: true,
            type: 10
        }
    ],

    callback: ({ args, message, client }) => {
        const bot_Avatar = client.user?.displayAvatarURL({dynamic: true})
        const K = Number(4000000000000000)
        const Cc = Number(args[0])
        const e1 = args[0]

        if(isNaN(Cc)) {
            let em = new MessageEmbed()
            .setTitle(`<a:WM_no:909050182467997708>Error`)
            .setDescription(`您輸入的'攝氏度'為'${e1}',但他不是一個數字,請輸入數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(K > 1) {
            let F = Cc * K * 9 / K / 5
            let Ff = F + 32
            let em = new MessageEmbed()
            .setTitle(`${Cc} ℃ =`)
            .setDescription(`**${Ff} ℉**`)
            .setColor('RANDOM')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
    }
} as ICommand