import { Interaction } from "discord.js";
import {CommandList} from "../commands/_CommandList";
export const onInteraction = async (interaction:Interaction) => {
    if (interaction.isCommand()){
        for (const Command of CommandList){
            if (interaction.commandName === Command.data.name){
                await Command.run(interaction);
                break; // small opti ehe, could have used a while loop but, to my mind, it's less readable
            }
        }
    }
};