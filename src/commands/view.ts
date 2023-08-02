import {SlashCommandBuilder} from "@discordjs/builders";
import {CommandInt} from "../interfaces/Command";
import {getDevData} from "../modules/getDevData";
import {MessageEmbed} from "discord.js";

export const view: CommandInt = {
    data: new SlashCommandBuilder()
        .setName("view")
        .setDescription("Show your latest 100 days of code Check in.")
    ,
    run: async (interaction) => {
        await interaction.deferReply();
        const {user} = interaction;
        const targetDev = await getDevData(user.id);
        // check if on day 0
        if (targetDev.day === 0) {
            await interaction.editReply({
                content: "You have not started the challenge yet.",
            });
            return;
        }
        // create an answer
        const oneHundredEmbed = new MessageEmbed()
        .setTitle("100 Days of Code progress")
            .setDescription(`Here is my 100 days of code progress. I last reported an update on : ${new Date(targetDev.timestamp).toLocaleDateString()}`)
            .addFields([
                {
                    name: "Round",
                    value: targetDev.round.toString(),
                    inline: true,
                },
                {
                    name: "Day",
                    value: targetDev.day.toString(),
                    inline: true,
                }
            ])
            .setAuthor({
                name: user.tag,
                iconURL: user.displayAvatarURL(),
            })

//        await interaction.editReply({embeds: [oneHundredEmbed]});
        // instead of self reply, send a message to the channel
        if (!interaction.channel) {
            await interaction.editReply({
                content: "should be used in a channel",
            });
            return;
        }
        await interaction.channel.send({embeds: [oneHundredEmbed]});
    }
}