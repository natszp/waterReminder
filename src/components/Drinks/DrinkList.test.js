
import DrinkList from './DrinksList';
import { screen, render } from '@testing-library/react';

const DRINKS = [{id: 1, type: "Water", amount:300},
                {id:2, type: "Coffee", amount:150}];

describe('renders drinks correctly', ()=> {

    test('render the correct number of drinks', () => {

        render(<DrinkList drinks={DRINKS}/>)

        const drinksItems = screen.getAllByTestId('drinkItem')
        expect(drinksItems).toHaveLength(2)

    })

    test('renders the correct type and amount of each drink', () => {

        render(<DrinkList drinks={DRINKS}/>)

        for(let drink of DRINKS){
            const type = screen.getByText(`${drink.type}`)
            const amount = screen.getByText(`${drink.amount}`)
  
            expect(type).toBeInTheDocument();
            expect(amount).toBeInTheDocument();
        }

    })

    test('renders "No drink to show" if no drinks added', ()=> {
        render(<DrinkList drinks={[]}/>)

        const noDrinksInfo = screen.getByText(/No drinks to show/)
        expect(noDrinksInfo).toBeInTheDocument();

    })
})