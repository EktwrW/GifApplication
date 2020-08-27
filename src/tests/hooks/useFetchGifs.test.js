import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'U2' ) );
        const { data, loading } = result.current;
        //const { data:images, loading } = useFetchGifs( category );

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    })

    test('debe retornar un arreglo imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'U2' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe( false );
    })
    
    
})