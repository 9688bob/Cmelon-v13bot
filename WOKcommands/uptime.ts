import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import { bot_tag, owner_tag } from "../../database/main";

export default {
    category: '擁有者專屬',
    description: 'Gets the bots uptime',

    slash: false,
    testOnly: false,
    ownerOnly: true,
    

    callback: ({message, client}) => {
        const bot_Avatar = client.user?.displayAvatarURL({dynamic: true})
        let totalSeconds = (client.uptime! / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let em = new MessageEmbed()
        .setTitle(`:stopwatch: 機器人上線時間`)
        .setDescription(`我已經上線這麼久了:\n**__${days}天,${hours}小時,${minutes}分鐘,${seconds}秒__**`)
        .setColor(`RANDOM`)
        .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        // let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
        return em
        
    }, 
} as ICommand