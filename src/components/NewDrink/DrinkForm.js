import { useState } from 'react';
import './DrinkForm.css'
import Modal from '../UI /Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const DRINK_TYPES = ['Water', 'Juice', 'Tea', 'Coffee']

const DrinkForm = (props) => {


    const [enteredType, setEnteredType] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [shownModal, setShownModal] = useState(false)



    const typeChangeHandler = (event) => {
        setEnteredType(event.target.value)
        if (event.target.value === 'Coffee'){
            setShownModal(true)
        }
    }


    const hideModalHandler = () => {
        setShownModal(false)
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



    const warningContent = 'Be careful! Safe amount of caffeinated drinks amounts to aproximately 4 cups of coffee per day'

    return (
        <>
            <form onSubmit={submitFormHandler} >
                <div className="new-drink__controls">
                    <div className="new-drink__control">
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={enteredType}
                            required={true}
                            onChange={typeChangeHandler}
                            data-testid='select'
                        >
                            {DRINK_TYPES.map(drink =>
                                <MenuItem key={drink} value={drink}>{drink}</MenuItem>)}
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
                            InputProps={{ inputProps: { min: 100, step: 50 } }}
                            required={true}
                            onChange={amountChangeHandler}
                        />
                    </div>
                </div>
                <div className='new-drink__actions'>
                    <Button type='button' onClick={props.onCancel}>Cancel</Button>
                    <Button type='submit'>Add Drink</Button>
                </div>
            </form>


            { shownModal && <Modal onOpen={shownModal} content={warningContent} onConfirm={hideModalHandler} />}
        </>
    )
}

export default DrinkForm;