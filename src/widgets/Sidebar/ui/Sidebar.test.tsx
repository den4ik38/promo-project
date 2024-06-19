import {fireEvent, screen} from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { RenderWithTranslation } from 'shared/lib/tests/RenderWithTranslation';

describe('Sidebar', ()=>{
    test('test render', ()=>{
        RenderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('test collapse', ()=>{
        RenderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()

    })
})