import { getActiveUser, getUser } from "../../src/base-pruebas/05-funciones";

describe('Test - 05-funciones',() => {

test('get user mus return an object',() => {

    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };

    const user = getUser();
    console.log(user);

    expect (testUser).toStrictEqual(user);

})

test('must return an object with the same name',() =>{

    
    const name = 'Martin';

    const testUser = {
        uid: 'ABC567',
        username: 'Martin'
    };

    const ob = getActiveUser(name);

    expect(ob).toStrictEqual(testUser);

    
})

})