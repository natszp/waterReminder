import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from './Login';


describe('logging in correctly', ()=> {
    

    test('allows the user to submit his/her credentials', ()=> {
        const submit = jest.fn()

        render(<Login onLogin={submit}/>);

        const emailInput = screen.getByRole('textbox', {name: /email/i});
        const passwordInput = screen.getByLabelText('password *'); //not sure why getByRole + name not working in this case
        const loginButton = screen.getByRole('button', {name: /login/i})
    

        user.type(emailInput, 'nat@gmail.com');
        user.type(passwordInput, '123password');
        user.click(loginButton)
        

        expect(submit).toHaveBeenCalledWith({
            email: 'nat@gmail.com',
            password: '123password'
        })
    

    })

    test('LOGIN button becomes active when both e-mail and password pass the validation', () => {

        render(<Login/>);

        const emailInput = screen.getByRole('textbox', {name: /email/i});
        const passwordInput = screen.getByLabelText('password *');
        const loginButton = screen.getByRole('button', {name: /login/i})
    
        user.type(emailInput, 'nat@gmail.com');
        user.type(passwordInput, '123password');

        expect(loginButton).not.toBeDisabled()

        
    })
})