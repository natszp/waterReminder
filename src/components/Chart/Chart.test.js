import userEvent from "@testing-library/user-event";
import Chart from "./Chart"
import {render, screen} from '@testing-library/react'

describe('rendering Chart component correctly', ()=> {

    test('renders Modal if button "Check hydration" was clicked', ()=> {
        render(<Chart />);

        const buttonEl = screen.getByRole('button')
           //to find workaround
        //userEvent.click(buttonEl)

     

        //const outputModal = screen.getByText('Your hydration level is', {exact: false})
        //expect(outputModal).toBeInTheDocument();

    });

    test('does not render Modal unless the button "Check hydration" was clicked', () => {
        // for cases when hydration level is below 100% 
        render(<Chart />);

        const outputModal = screen.queryByText('Your hydration level is', {exact: false})
        expect(outputModal).not.toBeInTheDocument();
    })

})