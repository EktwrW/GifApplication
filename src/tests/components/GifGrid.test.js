import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

const { GifGrid } = require("../../components/GifGrid");
const { shallow } = require("enzyme");
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {

    const category = 'megadeth';
    
    
    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa/ConstantSourceNode.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquiercosa/ConstantSourceNode.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
})