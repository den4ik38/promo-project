import {fireEvent, screen} from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { RenderComponent } from 'shared/lib/tests/RenderComponent';

describe('Sidebar', ()=>{
    test('test render', ()=>{
        RenderComponent(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('test collapse', ()=>{
        RenderComponent(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()

    })
})