import DrinkItem from "./DrinkItem"
import Card from "../UI /Card"
import './DrinksList.css'

const DrinksList = (props) => {

    return (
        <div>
            <Card className='drinks'>
                {props.drinks.map(drink =>
                    <DrinkItem
                        key={drink.id} type={drink.type} amount={drink.amount} />)}
            </Card>


        </div>
    )

}

export default DrinksList