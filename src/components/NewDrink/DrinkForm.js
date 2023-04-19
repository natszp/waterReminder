import { useState } from 'react';
import './DrinkForm.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';


const DRINK_TYPES = ['Water', 'Juice', 'Tea', 'Coffee']

const DrinkForm = (props) => {


    const [enteredType, setEnteredType] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')

    const typeChangeHandler = (event) => {
        setEnteredType(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        const drinkData = {
            type: enteredType,
            amount: enteredAmount
        }
        props.onSaveDrinkData(drinkData);
        setEnteredType('')
        setEnteredAmount('')
    }

    return (
        <div>
            <form onSubmit={submitFormHandler} >
                <div className="new-drink__controls">
                    <div className="new-drink__control">
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={enteredType}
                            onChange={typeChangeHandler}
                        >
                            {DRINK_TYPES.map(drink =>
                                <MenuItem value={drink}>{drink}</MenuItem>)}
                        </Select>

                    </div>
                    <div className='new-drink__control'>
                        <InputLabel>Amount</InputLabel>
                        <TextField
                            type="number"
                            value={enteredAmount}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{ inputProps: { min: 100, step: 100 } }}
                            required={true}
                            onChange={amountChangeHandler}
                        />
                    </div>
                </div>
                <div className='new-drink__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Drink</button>
                </div>
            </form>
        </div>
    )
}

export default DrinkForm;