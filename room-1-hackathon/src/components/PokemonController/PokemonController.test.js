import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import PokemonController from './';


const testProps = {
    handleClick: jest.fn(),
    updateText:jest.fn(),
    searchByIdClick:jest.fn(),
}



test("check if handleClick is called when the button is clicked", () =>{

    const{getByTestId} = render(<PokemonController {...testProps}/>);
    const actual = getByTestId("button");
    fireEvent.click(actual);
    
    expect(testProps.handleClick).toHaveBeenCalled();
})
