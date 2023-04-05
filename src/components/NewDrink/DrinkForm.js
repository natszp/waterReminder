import { useState } from 'react';
import './DrinkForm.css'

const DrinkForm = (props) => {

    const [enteredType, setEnteredType] = useState('')
    const[enteredAmount, setEnteredAmount] = useState('')

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
                        <label>Type</label>
                        <input
                            type='text'
                            value={enteredType}
                            onChange={typeChangeHandler}
                        />
                    </div>
                    <div className='new-drink__control'>
                        <label>Amount</label>
                        <input
                            type='number'
                            value={enteredAmount}
                            min='100'
                            step='100'
                            onChange={amountChangeHandler}
                        />
                    </div>
                </div>
                <div className='new-drink__actions'>
                    <button type="button">Cancel</button>
                    <button type='submit'>Add Drink</button>
                </div>
            </form>
        </div>
    )
}

export default DrinkForm;