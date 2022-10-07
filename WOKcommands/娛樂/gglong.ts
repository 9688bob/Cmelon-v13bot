import { MessageEmbed } from "discord.js";
import { fstat } from "fs";
import { ICommand } from "wokcommands";
import { bot_tag, owner_tag } from "../../database/main";

function ggl(length: number){
    let long = ''
    let ne = '='
    for( var i = 0; i < length; i++ ) {
        long += ne.charAt(Math.floor(Math.random() * 1));
    }
    return long
}



export default {
    category: '娛樂',
    description: '測測看你的GG長度吧',

    slash: false,
    testOnly: false,
    guildOnly: false,
    ownerOnly: false,

    minArgs: 0,
    maxArgs: 1,
    expectedArgs: '<人 or 物品>',

    callback: ({ message, args, client }) => {
        const bot_Avatar = client.user?.displayAvatarURL({dynamic: true})
        const va = Math.floor(Math.random() * 101)
        const Ana = message.author.username
        const van = Number(va)

        if(Number(message.author.id) == 775171287777280031 && !args[0]) {
            let em = new MessageEmbed()
            .setTitle(`:chicken: ${Ana} 的雞雞長度（0公分）`)
            .setDescription(`8D`)
            .setColor('RANDOM')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }
        if(args[0] == '<@775171287777280031>') {
            let em = new MessageEmbed()
            .setTitle(`:chicken: ${Ana} 的雞雞長度（0公分）`)
            .setDescription(`8D`)
            .setColor('RANDOM')
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            return em
        }

        if(args[0]) {
            let em = new MessageEmbed()
        // .setDescription(`:chicken: ${args[0]} 的雞雞長度（${va}公分）`)
        .setDescription(`:chicken: ${args[0]} 的雞雞長度（${va}公分）`)
        .addField(`8${ggl(van)}D`,':）')
        .setColor('RANDOM')
        .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        return em
        }else{
        let em = new MessageEmbed()
        .setTitle(`:chicken: ${Ana} 的雞雞長度（${va}公分）`)
        .setDescription(`8${ggl(van)}D`)
        .setColor('RANDOM')
        .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        return em
    }}
} as ICommand