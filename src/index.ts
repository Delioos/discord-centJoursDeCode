import {Client, Interaction} from "discord.js";
import {IntentOptions} from "./config/IntentOptions";
import {connectDatabase} from "./database/connectDatabase";
import {validateEnv} from "./utils/validateEnv";
import {onInteraction} from "./events/onInteraction";

// the iife acronyme stands for Immediately Invoked Function Expression
(async () => {
    // validate the environment variables
    if (!validateEnv()) return;

    const BOT = new Client({intents: IntentOptions});

    // listen to the ready event
    BOT.on("ready", (): void => {
        console.log(`Logged in as ${BOT.user?.tag}!`);
    });
    // listen to the interactionCreate event
    BOT.on("interactionCreate",
        async (interaction:Interaction):Promise<any> => await onInteraction(interaction)
    );

    // connect to the database
    await connectDatabase();

    await BOT.login(process.env.TOKEN);
})();