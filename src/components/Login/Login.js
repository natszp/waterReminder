import { useState } from 'react';

import Card from '../UI /Card'
import classes from './Login.module.css';
import Header from '../Layout/Header';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        setFormIsValid(
            event.target.value.trim().length > 6 && enteredEmail.includes('@')
        );
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <>
            <Header text='Log in & check your hydration data' />
            <Card className={classes.login}>

                <form onSubmit={submitHandler}>
                    <div>

                        <InputLabel>E-mail</InputLabel>
                        <TextField
                            type="email"
                            value={enteredEmail}
                            required={true}
                            onChange={emailChangeHandler}
                            onBlur={validateEmailHandler} />
                    </div>

                    <div>
                        <InputLabel>Password</InputLabel>

                        <TextField
                            type="password"
                            value={enteredPassword}
                            required={true}
                            onChange={passwordChangeHandler}
                            onBlur={validatePasswordHandler} />
                    </div>
                    <div className={classes.actions}>
                        <Button type="submit" disabled={!formIsValid}>
                            Login
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
};


export default Login