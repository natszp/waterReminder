import { useState } from "react"
import DrinkForm from "./DrinkForm"
import './NewDrink.css'
import Button from '@mui/material/Button';


const NewDrink = (props) => {

    const [shownForm, setShownForm] = useState(false)

    const showFormHandler = () => {
        setShownForm(true)
    }

    const hideFormHandler = () => {
        setShownForm(false)
        console.log('clicked cancel')
    }

    const addDrinkHandler = (enteredDrinkData) => {
        const drinkData = {
            ...enteredDrinkData,
            id: Math.random().toString() // just for the beginning
        }
        console.log(drinkData)
        props.onAddDrinkToDrinks(drinkData)
        setShownForm(false)
    }

    return (
        <div className="new-drink">
            {!shownForm && <Button onClick={showFormHandler}>Add drink</Button>}
            {shownForm && <DrinkForm onSaveDrinkData={addDrinkHandler} onCancel={hideFormHandler}/>}
        </div>
    )
}
export default NewDrink;