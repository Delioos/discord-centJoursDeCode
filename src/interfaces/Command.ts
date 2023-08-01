// to use data we have to import slash command data from discord.js
import { SlashCommandBuilder,SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction} from "discord.js";


export interface CommandInt {
    data:
        | Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">
        | SlashCommandSubcommandsOnlyBuilder;
    run: (interaction: CommandInteraction) => Promise<void>;
}