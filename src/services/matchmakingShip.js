import { EmbedBuilder } from "discord.js";
export function Matchmake(princess, knight) {
    const p = parseInt(princess.id.slice(0, 2));
    const k = parseInt(knight.id.slice(0, 2));
    const salt = princess.id.slice(-1) ^ knight.id.slice(-1);
    const saltVal = princess.id[salt] * knight.id[salt];
    var match = (p + k + saltVal * saltVal) % 101;
    var bar = "";
    for (let i = 0; i < Math.floor(match / 10); i++) {
        bar = bar.concat("<:filledbar:1239393345705349161>");
    }
    for (let j = Math.floor(match / 10); j < 10; j++) {
        bar = bar.concat("<:emptybar:1239393328420749363>");
    }
    if (match >= 50) {
        bar = bar.concat(" :heartpulse: ");
    } else {
        bar = bar.concat(" :broken_heart: ");
    }
    bar = bar.concat(match, "%");
    var results = new EmbedBuilder()
        .setColor(0xfcb0cc)
        .setAuthor({ name: "Matchmaking" })
        .setDescription(
            `${princess.user.username} :revolving_hearts: ${knight.user.username}`,
        )
        .setFields({ name: `The result is...`, value: bar, inline: false });
    return results;
}
