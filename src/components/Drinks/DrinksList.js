import DrinkItem from "./DrinkItem"
import Card from "../UI /Card"
import './DrinksList.css'

const DrinksList = (props) => {

    const noDrinksInfo = <p className="info">No drinks to show</p>


    return (
        <>
            <Card className='drinks'>
                {props.drinks.length === 0 && noDrinksInfo}
                {props.drinks.map(drink =>
                    <DrinkItem
                        key={drink.id} type={drink.type} amount={drink.amount} />)}
            </Card>


        </>
    )

}

export default DrinksList