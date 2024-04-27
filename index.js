import { Client, EmbedAssertions, EmbedBuilder, IntentsBitField } from 'discord.js';
import { GetRandomJob } from './src/services/randomJob.js';
import { parseForecastTime } from './src/services/frontlineForecast.js';
import { ErrorEmbed } from './src/services/util.js';
const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

//EVENTS
client.on('ready', (c) => {
    console.log(`${c.user.tag} at your service`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!help') {
        const helpEmbed = new EmbedBuilder()
            .setColor(0xFCB0CC)
            .setTitle('Bot Commands')
            .setURL('https://github.com/Dustbowl/pvp-princess-bot')
            .addFields(
                {name: '!help', value: '> List of bot commands with basic syntax'},
                {name: '!job [params]', value: '> Returns random :job: (excluding BLU)\n> [params] is optional, formatted as [job/category/...]'},
                {name: '!forecast [date]', value: '> Returns Frontline Map with timestamps.\n> [date] is optional and is formatted as [DD/MM/YY]'},
            )
        message.reply({embeds: [helpEmbed]});
    }

    if (message.content.startsWith('!job')) {
        const fields = message.content.split(' ');
        if(fields.length > 2) {
            message.reply({embeds: [ErrorEmbed('Error during !job. Ensure correct format!')]});
            return;
        }
        if(fields.length == 2 ) {
            var response = GetRandomJob(fields[1]);
        } else {
            var response = GetRandomJob();
        }
        if (response) {
            message.reply(response);
            return;
        }
        message.reply({embeds: [ErrorEmbed('Error during !job. Ensure correct format!')]});
    }

    if(message.content.startsWith('!forecast')) {
        const fields = message.content.split(' ');
        if(fields.length > 2) {
            message.reply({embeds: [ErrorEmbed('Error during !forecast. Ensure correct format!')]});
            return;
        }
        if(fields.length == 2 ) {
            var response = parseForecastTime(fields[1]);
        } else {
            var response = parseForecastTime();
        }
        if (response) {
            message.reply({embeds: [response]});
            return;
        }
        message.reply({embeds: [ErrorEmbed('Error during !forecast. Ensure correct format!')]});
    }
});

client.login(process.env['TOKEN']);