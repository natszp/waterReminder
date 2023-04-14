import DrinkForm from "./DrinkForm"
import './NewDrink.css'


const NewDrink = (props) => {

    const addDrinkHandler = (enteredDrinkData) => {
        const drinkData = {
            ...enteredDrinkData,
            id: Math.random().toString() // just for the beginning
        }
        console.log(drinkData)
        props.onAddDrinkToDrinks(drinkData)
    }

    return(
        <div className="new-drink">
            <DrinkForm onSaveDrinkData={addDrinkHandler}/>

        </div>
    )
}
export default NewDrink;