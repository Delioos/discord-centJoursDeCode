import { CommandInt } from "../interfaces/Command";
import {oneHundred} from "./oneHundred";
import {edit} from "./edit";
import {view} from "./view";

export const CommandList: CommandInt[] = [oneHundred, edit, view];

// can be automated https://github.com/BeccaLyria/discord-bot/blob/main/src/utils/readDirectory.ts but a bit too complex for such a small project