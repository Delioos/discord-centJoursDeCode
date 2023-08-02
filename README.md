# 100 Days of Code Bot

## Description

This Discord bot is designed to help you track and share your 100 Days of Code progress. It provides various commands to interact with your updates and progress.

## Getting Started

To start using the bot, follow the steps below:

1. Invite the bot to your Discord server by clicking [here](https://discord.com/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&scope=bot&permissions=YOUR_BOT_PERMISSIONS).
2. Make sure the bot has the required permissions in the channels where you want to use it.
3. Create a mongodb atlas account.
4. install the required packages with npm install.
5. build the app with ```npm run build``` and then run the bot by using ```npm run start``` command.

### env
The project is running on a .env to store sensible informations. You got three parameters to provide
```
TOKEN="[Your discord bot secret token]"
MONGO_URI="[Your db link] (should look like this : mongodb+srv://<pseudo>:<pwd>@<db-name>.fytyqiw.mongodb.net/?retryWrites=true&w=majority)"
GUILD_ID="[Your discord serv id]"
```

## Commands

### /help

Provides information on using this bot.

### /100

Use this command to create your update for today. The `message` will be displayed in your embed.

### /edit

If you spot a typo in your embed, right-click it, and copy the ID (you may need developer mode on for this). Then, use the `/edit` command to update that embed with a new message.

### /view

To see your current progress in the 100 Days of Code challenge and the day you last checked in, use this command.



## Acknowledgments

Special thanks to freeCodeCamp for the tutorial


## what have I learned ?
- code is maintainable and readable due to modular components.
- mongodb is fire | mongoose helps structure your MongoDB records to prevent you from passing malformed or incomplete data into your database.
- ts is goated
