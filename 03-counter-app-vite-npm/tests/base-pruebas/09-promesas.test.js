import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas"

describe('Test 09-promesas',()=>{

    test('getHeroeByIdAsync must return a hero',(done)=>{
        const id = 1;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        })
    });

    test('getHeroeByIdAsync must return error',(done)=>{
        const id = 100;
        getHeroeByIdAsync(id)

        .catch(error => {
            console.log(error);
            expect(error).toBe('No se pudo encontrar el héroe ' + id);

            done();
        })
    });


});