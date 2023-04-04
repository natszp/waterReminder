import DrinkItem from "./DrinkItem"
import Card from "../UI /Card"
import './DrinksList.css'

const DrinksList = (props) => {

    return (
        <div>
            <Card className='drinks'>
                <DrinkItem type={props.drinks[1].type} amount={props.drinks[1].amount} />
                <DrinkItem type={props.drinks[0].type} amount={props.drinks[0].amount} />
            </Card>


        </div>
    )

}

export default DrinksList