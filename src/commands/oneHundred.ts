import { CommandInt } from "../interfaces/Command";
import {SlashCommandBuilder} from "@discordjs/builders";
import DevModel from "../database/models/DevModel";
import {getDevData} from "../modules/getDevData";
import {updateDevData} from "../modules/updateDevData";
import {MessageEmbed} from "discord.js";

export const oneHundred: CommandInt = {
    data: new SlashCommandBuilder()
        .setName("100")
        .setDescription("Check in for the 100 Days of Code challenge.")
        .addStringOption((option) =>
            option
                .setName("message")
                .setDescription("The message to go in your 100 Days of Code update.")
                .setRequired(true)
        ),
    run: async (interaction) => {
        await interaction.deferReply();
        const { user } = interaction;
        const text = interaction.options.getString("message", true);

        const targetDev = await getDevData(user.id);
        const updatedDev = await updateDevData(targetDev);

        // create an answer
        const oneHundredEmbed = new MessageEmbed();
        oneHundredEmbed.setTitle("100 Days of Code");
        oneHundredEmbed.setDescription(text);
        oneHundredEmbed.setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL(),
        });
        /*
        oneHundredEmbed.addField("Round", updatedDev.round.toString(), true);
        oneHundredEmbed.addField("Day", updatedDev.day.toString(), true);
        avoiding the use of deprecated methods
         */
        oneHundredEmbed.addFields([
            {
                name: "Round",
                value: updatedDev.round.toString(),
                inline: true,
            },
            {
                name: "Day",
                value: updatedDev.day.toString(),
                inline: true,
            }
        ])
        oneHundredEmbed.setFooter({
            text:
                "Day completed: " +
                new Date(updatedDev.timestamp).toLocaleDateString(),
        });

        await interaction.editReply({ embeds: [oneHundredEmbed] });
    },
};

