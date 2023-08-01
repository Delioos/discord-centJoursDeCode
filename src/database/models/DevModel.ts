// structure for user object
import { Document, model, Schema } from "mongoose";

export interface DevInt extends Document {
    discordId: string; //  Every user object in Discord has a unique identifier, called a Snowflake, which is used to distinguish them from other users. Unlike a username or discriminator (the four digit number after the username), the id value cannot be changed. This makes it the ideal value for linking your stored data to a Discord user.
    round: number; // This will represent the "round" the user is on in the challenge. When someone completes 100 days of the challenge, they may choose to undertake the challenge again. When they do, they often refer to it as "round 2", for example.
    day: number; // This will represent the day the user is in the challenge
    timestamp: number; // You will use this value to track when the user last submitted a 100 Days of Code post.
}

export const DevSchema = new Schema({
    discordId: String,
    round: Number,
    day: Number,
    timestamp: Number,
});
// we are using String and not string. String refers to the primitive JS type, when string is the TS definition.

export default model<DevInt>("Dev", DevSchema);