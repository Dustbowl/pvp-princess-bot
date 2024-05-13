import { EmbedBuilder } from "discord.js";
export function Matchmake(princess, knight) {
    if ((princess.id == process.env['PRINCESS'] && knight.id == process.env['KNIGHT']) || 
        (princess.id == process.env['KNIGHT'] && knight.id == process.env['PRINCESS'])) {
        var match = 100;
    } else {
        var match = Math.abs(( princess.id + knight.id ) % 100) + 1;
    }
    var bar = "";
    for (let i = 0; i < Math.floor(match/10); i++) {
        bar = bar.concat("<:filledbar:1239393345705349161>");
    }
    for (let j = Math.floor(match/10); j < 10; j++) {
        bar = bar.concat("<:emptybar:1239393328420749363>");
    }
    if(match >= 50) {
        bar = bar.concat(" :heartpulse: ");
    } else {
        bar = bar.concat(" :broken_heart: ");
    }
    bar = bar.concat(match, "%");
    var results = new EmbedBuilder()
        .setColor(0xFCB0CC)
        .setAuthor({name: 'Matchmaking'})
        .setDescription(`${princess.user.username} :revolving_hearts: ${knight.user.username}`)
        .setFields({name: `The result is...`, value: bar, inline: false});
    return results;
}