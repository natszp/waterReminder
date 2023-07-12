import {render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event'
import DrinkForm from './DrinkForm';

describe('renders Drink Form correctly', () => {

    test('empties inputs if form is submitted', () => {

        render(<DrinkForm onSaveDrinkData={()=> {}}/>)
        
        const selectTypeInput = screen.getByTestId('select')
        const amountInput = screen.getByRole('spinbutton')
        const button = screen.getByRole('button', {name: /add/i})

        user.click(selectTypeInput)
        user.keyboard('Water')
    
        user.click(amountInput)
        user.keyboard('300')
        user.click(button)

        expect(amountInput).toHaveValue(null)

        

    })
})