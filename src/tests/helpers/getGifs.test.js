const { default: getGifs } = require("../../helpers/getGifs")


describe('Pruebas con getGifs Fetch', () => {

    test('debe de mostrar 10 elementos', async() => {

        const gifs = await getGifs('Saint Seiya serie');

        expect( gifs.length ).toBe( 10 );
    })

    test('debe de mostrar 10 elementos', async() => {

        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    })
})