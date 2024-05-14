import { CalculateMatch } from "../services/matchmakingShip";
describe('Matchmaking', () => {
    it('should be 100%', () => {
        const user1 = '450010001000100012'
        const user2 = '550010001000100010'
        const match = CalculateMatch(user1, user2);
        expect(match).toBe(100);
    });
    it('should be 0%', () => {
        const user1 = '770010001000100015'
        const user2 = '230010001000100011'
        const match = CalculateMatch(user1, user2);
        expect(match).toBe(0);
    });
    it('should be 76%', () => {
        const user1 = '170010021000100012'
        const user2 = '230010031000100015'
        const match = CalculateMatch(user1, user2);
        expect(match).toBe(76);
    });
    it('should have 19 digits and 17 digits', () => {
        const user1 = '1830100030001000159'
        const user2 = '62001000900010001'
        const match = CalculateMatch(user1, user2);
        expect(match).toBe(1);
    })
});