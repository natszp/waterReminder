import { useState, useReducer, useEffect } from 'react';

import Card from '../UI /Card'
import classes from './Login.module.css';
import Header from '../Layout/Header';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false }

}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 }
    }
    return { value: '', isValid: false }
}

const Login = (props) => {

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false })
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false })
    const [formIsValid, setFormIsValid] = useState(false);


    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ 'type': 'USER_INPUT', val: event.target.value })
    };

    const validateEmailHandler = () => {
        dispatchEmail({
            type: 'INPUT_BLUR'
        });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({
            type: 'INPUT_BLUR'
        })
    };


    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailState.isValid && passwordState.isValid
            )
        }, 500)
        return () => { clearTimeout(identifier) }
    }, [emailState, passwordState])

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin({email: emailState.value, password: passwordState.value});
    };

    return (
        <>
            <Header text='Log in & check your hydration data' />
            <Card className={classes.login}>

                <form onSubmit={submitHandler} data-testid='form'>  <div>

                    <div>

                        <InputLabel>Your e-mail</InputLabel>
                        <TextField
                            type="email"
                            label="email"
                            value={emailState.value}
                            required={true}
                            onChange={emailChangeHandler}
                            onBlur={validateEmailHandler} />
                    </div>
                    <InputLabel>Your password</InputLabel>

                    <TextField
                        type="password"
                        label="password"
                        value={passwordState.value}
                        required={true}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler} />
                </div>



                    <div className={classes.actions}>
                        <Button type="submit" disabled={!formIsValid} aria-label='login'>
                            Login
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
};


export default Login