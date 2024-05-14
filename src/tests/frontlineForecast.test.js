import { parseForecastTime } from "../services/frontlineForecast";
describe('Frontline Forecast', () =>{
    const embed = parseForecastTime('15/5/24');
    it('is correct 1st day', () => {    
        expect(embed.data.fields[0].name).toBe('Fields of Glory (Shatter)');
        expect(embed.data.fields[0].value).toBe('> <t:1715698800:f> - <t:1715698800:R>');
    });
    it('is correct 2nd day', () => {
        expect(embed.data.fields[1].name).toBe('Onsal Hakair (Danshig Nadaam)');
        expect(embed.data.fields[1].value).toBe('> <t:1715785200:f> - <t:1715785200:R>');
    });
    it('is correct 3rd day', () => {
        expect(embed.data.fields[2].name).toBe('Seal Rock (Seize)');
        expect(embed.data.fields[2].value).toBe('> <t:1715871600:f> - <t:1715871600:R>');
    });
});