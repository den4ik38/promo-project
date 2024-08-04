import {render, screen} from '@testing-library/react';
import { AppButton, ButtonTheme } from './AppButton';

describe('AppText', ()=>{
    test('test render', ()=>{
        render(<AppButton>TEST</AppButton>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('test classes', ()=>{
        render(<AppButton theme={ButtonTheme.CLEAR}>TEST</AppButton>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})