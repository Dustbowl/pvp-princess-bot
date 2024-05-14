import { ErrorEmbed } from "../services/util";
describe('Util functions', () => { 
    const error = ErrorEmbed('Error Test');
    it('displays correct message', () => {
        expect(error.data.description).toBe('Error Test');
    })
})