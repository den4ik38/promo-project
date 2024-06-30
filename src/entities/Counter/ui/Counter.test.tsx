import {fireEvent, screen} from '@testing-library/react';
import { RenderComponent } from 'shared/lib/tests/RenderComponent';
import { Counter } from './Counter';

describe('Sidebar', ()=>{
    test('test render', ()=>{
        RenderComponent(<Counter />)
        expect(screen.getByTestId('title-value')).toHaveTextContent('value = 0')
    })
    test('test increment btn', ()=>{
        RenderComponent(<Counter />)
        fireEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('title-value')).toHaveTextContent('value = 1')
    })
    test('test decrement btn', ()=>{
        RenderComponent(<Counter />)
        fireEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('title-value')).toHaveTextContent('value = -1')
    })
})