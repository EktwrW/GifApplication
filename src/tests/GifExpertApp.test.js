import React from 'react';

const { shallow } = require("enzyme");
const { default: GifExpertApp } = require("../GifExpertApp");



describe('Pruebas en <GifExpertApp />', () => {


    test('debe mostrarse correctamente', () => {

        const wrapper = shallow(<GifExpertApp /> );
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe mostrar una lista de categorias', () => {
        
        const categories = ['U2', 'Muse'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
})

