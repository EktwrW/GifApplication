import React from 'react';
import '@testing-Library/jest-dom';

const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")



describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe mostrarse correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { 
            target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    })

    test('should not post information with submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('should call setCategories and clean the text form', () => {
        
        const value = 'Este es el valor que voy a usar para pruebas';
        //simular el inputChange:
        wrapper.find('input').simulate('change', { target: { value } });

        //simular el submit:
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        //setCategories se debe haber llamado:
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //el valor de input debe estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');

    })
    
    
    
})
