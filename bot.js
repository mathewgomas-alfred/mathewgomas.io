require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

// Your existing code, then at the bottom:
client.login('MTMyNjU4OTMzMDIxMDE2MDY2Mg.Gxggyq.w64Ua8OmgEoBCwIfY5UgrM7KxDFD9L9ElznkJA');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === '!discordlink') {
        message.channel.send('Join our Discord server: [https://discord.gg/9Z2cB5VUjy]');
    }
});

client.login('MTMyNjU4OTMzMDIxMDE2MDY2Mg.Gxggyq.w64Ua8OmgEoBCwIfY5UgrM7KxDFD9L9ElznkJA');

// test/bot.test.js
const { expect } = require('chai');
const { Client } = require('discord.js');
const botCode = require('../bot');

describe('Discord Bot', () => {
    let client;

    before(() => {
        client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent
            ]
        });
    });

    it('should initialize client', () => {
        expect(client).to.be.an.instanceof(Client);
    });

    // Add more tests as needed
});