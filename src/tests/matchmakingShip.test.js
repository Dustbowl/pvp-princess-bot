import { CalculateMatch } from "../services/matchmakingShip";
describe('Matchmaking', () => {
    var date = new Date();
    date.setHours(0);
    it('should be 100%', () => {
        const user1 = '450010001000100012'
        const user2 = '550010001000100010'
        const match = CalculateMatch(user1, user2);
        expect(match).toBe(100);
    });
    it('should be 50%', () => {
        const user1 = '770010001000100015'
        const user2 = '240010001000100011'
        const match = CalculateMatch(user1, user2, date);
        expect(match).toBe(50);
    });
    it('should be 88%', () => {
        const user1 = '170010021000100012'
        const user2 = '230010031000100015'
        const match = CalculateMatch(user1, user2, date);
        expect(match).toBe(88);
    });
    it('should have 19 digits and 17 digits at 50%', () => {
        const user1 = '1830100030001000159'
        const user2 = '62001000900010001'
        const match = CalculateMatch(user1, user2, date);
        expect(match).toBe(50);
    })
});