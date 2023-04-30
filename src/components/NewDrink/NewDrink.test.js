import { render, screen,userEvent } from '@testing-library/react'
import NewDrink from './NewDrink'

describe('renders New Drink component and DrinkForm correctly', ()=> {

    test('does not render Drink Form unless the button "Add drink" was clicked', () => {
    render(<NewDrink />);

    const outputModal = screen.queryByRole('form')
    expect(outputModal).not.toBeInTheDocument();

    })


})