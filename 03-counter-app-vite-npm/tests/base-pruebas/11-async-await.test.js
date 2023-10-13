import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test 11-async-await.test',()=>{

    test('getImagen should return a URL',async()=>{

        const url = await getImagen();
        
        expect(typeof url).toBe('string');
    });

})