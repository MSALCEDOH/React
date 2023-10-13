import { getGreeting } from "../../src/base-pruebas/02-template-string";

describe('Test - 02-template-string',() => {
    test ('Should return Hello Martin',() => {
        
        const name = 'Martin';
        const message = getGreeting(name);
        expect(message).toBe('Hello Martin');

    })
}
)