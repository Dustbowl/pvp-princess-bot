import { EmbedBuilder } from 'discord.js'

export function ErrorEmbed(errorMessage) {
    var errorEmbed = new EmbedBuilder()
        .setColor(0xF04242)
        .setTitle('Oops! Something went wrong.')
        .setDescription(errorMessage);
    return errorEmbed;
}