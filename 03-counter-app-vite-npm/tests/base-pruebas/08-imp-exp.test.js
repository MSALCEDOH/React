import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe ('Test in 08-imp-exp',()=>{

    test('getHeroById must return a hero by id',()=>{

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    })

    test('getHeroById must return undifined is not exixts id',()=>{

        const id = 100;
        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();

    })

    
    test('getHeroesByOwner, DC must return length 3 and Batman,Superman and Flash',()=>{

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        
        expect(hero.length).toEqual(3);
        expect(hero).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
            ]);

    })

    test('getHeroesByOwner, Marvel must return length 2',()=>{

        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        
        expect(hero.length).toEqual(2);        
    })

})