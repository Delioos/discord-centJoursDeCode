export const validateEnv = () => {
    if (!process.env.TOKEN) {
        console.warn("Bot token is not defined");
        return false;
    }

    if (!process.env.MONGO_URI) {
        console.warn("Mongo URI is not defined");
        return false;
    }
    return true;
}