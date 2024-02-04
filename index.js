import { config } from 'dotenv';
config();

import { Client, GatewayIntentBits, Guild, GuildMember } from 'discord.js';
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
]});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("guildMemberAdd", (GuildMember) => {
    console.log(GuildMember.user.tag);
    const targetChannel = GuildMember.guild.channels.cache.get("1203153665767243806");
    if (targetChannel) {
        targetChannel.send(`Welcome to the server ${GuildMember.user.tag}, I hope you enjoy your stay!`).catch(console.log("error"));
        //GuildMember.send(`Welcome to the server ${GuildMember.user.tag}, I hope you enjoy your stay!`).catch(console.log("error"));
    }

    const role = GuildMember.guild.roles.cache.get("1203362573404344380");

    if (role) {
        GuildMember.roles.add(role);
        console.log(`Added role to ${GuildMember.user.tag}`);
    }
});



client.login(process.env.CLIENT_TOKEN);

