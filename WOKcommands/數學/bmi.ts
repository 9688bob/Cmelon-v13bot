//除
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import { bot_tag, owner_tag } from "../../database/main";

export default {
    category: '數學',
    description: '計算BMI',

    slash: 'both',
    testOnly: false,
    guildOnly: false,
    ownerOnly: false,

    minArgs: 2,
    maxArgs: 2,
    expectedArgs: '<體重(KG)> <身高(CM)>',
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
        const kg = Number(args[0])
        const cm = Number(args[1])
        const error1 = args[0]
        const error2 = args[1]

        if(isNaN(kg)) {
            let em = new MessageEmbed()
            .setTitle(`<a:WM_no:909050182467997708>Error`)
            .setDescription(`您輸入的'體重'為'${error1}',但他不是一個數字,請輸入數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(isNaN(cm)) {
            let em = new MessageEmbed()
            .setTitle(`<a:WM_no:909050182467997708>Error`)
            .setDescription(`您輸入的'身高'為'${error2}',但他不是一個數字,請輸入數字.`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(kg == 0 || cm == 0) {
            let em = new MessageEmbed()
            .setTitle(`<a:WM_no:909050182467997708>Error`)
            .setDescription(`您的體重/身高不可能為0`)
            .setColor('RED')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        const m = cm / 100
        const m2 = m * m
        const bmi = kg / m2
        const rounded = Math.round((bmi + Number.EPSILON) * 100) / 100
        if(true) {
            let em = new MessageEmbed()
            .setTitle(`BNI計算`)
            .setDescription(`你的\n體重為 **${kg}**公斤\n身高為 **${cm}**公分\nBMI為 **${rounded}**\n**體重正常範圍為  BMI=18.5～24**`)
            .setColor('RANDOM')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        
    }
} as ICommand