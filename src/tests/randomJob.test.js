import { CreateJobPool } from "../services/randomJob";
describe('Random Job', () => {
    it('is single job only', () => {
        const single = CreateJobPool(['drk']);
        expect(single).toHaveLength(1);
        expect(single[0].GetName()).toBe('drk');
    });
    it('is pool', () => {
        const pool = CreateJobPool(['tank']);
        expect(pool).toHaveLength(4);
    });
    it('is pool of tank and healer', () => {
        const pool = CreateJobPool(['tank', 'healer']);
        expect(pool).toHaveLength(8);
    });
    it('is pool of blm and pld', () => {
        const pool = CreateJobPool(['blm', 'pld']);
        expect(pool).toHaveLength(2);
    });
    it('is pool of tank and blm', () => {
        const pool = CreateJobPool(['tank', 'blm']);
        expect(pool).toHaveLength(5);
    });
    it('is pool of tank and double weigted blm', () => {
        const pool = CreateJobPool(['tank', 'blm', 'blm']);
        expect(pool).toHaveLength(6);
    });
})