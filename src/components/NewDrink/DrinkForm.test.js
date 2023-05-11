import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import DrinkForm from './DrinkForm';

describe('renders Drink Form correctly', () => {

    test('empties inputs if form is submitted', () => {

        render(<DrinkForm onSaveDrinkData={()=> {}}/>)
        
        const selectTypeInput = screen.getByTestId('select')
        const amountInput = screen.getByRole('spinbutton')
        const button = screen.getByText(/Add drink/i)

        /*to add selectTypeInput

        userEvent.click(selectTypeInput)
        userEvent.selectOptions(screen.getByRole('option', {type: "Water"}))
        */
        userEvent.click(amountInput)
        userEvent.keyboard('300')
        userEvent.click(button)

        //expect(selectTypeInput).toHaveValue(null)
        expect(amountInput).toHaveValue(null)


        

    })
})