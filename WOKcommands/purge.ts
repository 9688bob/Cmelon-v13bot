import { ICommand } from "wokcommands";
import { MessageEmbed } from 'discord.js'
import { emoji_WM_error, emoji_WM_success } from "../../database/emoji";
import { bot_tag, owner_tag } from "../../database/main";

export default {
    category: '管理',
    description: '清除訊息',

    permissions: ['MANAGE_MESSAGES'],
    cooldown: '3s',

    slash: 'both',
    testOnly: true,
    guildOnly: true,
    ownerOnly: false,

    minArgs: 1,
    maxArgs:1,
    expectedArgs: '<數量>',
    expectedArgsTypes: ['NUMBER'],
    options: [
        {
            name: 'number',
            description: '數量',
            required: true,
            type: 3
        }
    ],

    callback: async ({ interaction, args, channel, message, client }) => {
        const bot_Avatar = client.user?.displayAvatarURL({dynamic: true})
        const amount = Number(args[0])
        const err = args[0]
        
        if(isNaN(amount)) {
            let em = new MessageEmbed()
            .setTitle(`${emoji_WM_error}Error`)
            .setDescription(`您輸入的'數字'為'${err}',但他不是一個數字,請輸入數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(!Number.isInteger(amount)) {
            let em = new MessageEmbed()
            .setTitle(`${emoji_WM_error}Error`)
            .setDescription(`您輸入的'數字'為'${err}',但他不是一個整數,請輸入整數.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(amount < 2) {
            let em = new MessageEmbed()
            .setTitle(`${emoji_WM_error}Error`)
            .setDescription(`您輸入的'數字'為'${err}',但他小於2,請輸入'2~99'間的數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(amount > 99) {
            let em = new MessageEmbed()
            .setTitle(`${emoji_WM_error}Error`)
            .setDescription(`您輸入的'數字'為'${err}',但他大於99,請輸入'2~99'間的數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        try {
            await channel.bulkDelete(amount)
            let em = new MessageEmbed()
            .setTitle(`${emoji_WM_success}成功!`)
            .setDescription(`**已刪除${amount}條訊息**`)
            .setColor('RANDOM')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        catch (error) {
            console.log(error)
            let em = new MessageEmbed()
            .setTitle(`${emoji_WM_error}Error`)
            .setDescription(`我無法刪除**14天**以前的訊息`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
    }

} as ICommand
