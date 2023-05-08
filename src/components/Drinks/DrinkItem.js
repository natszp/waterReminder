import Card from '../UI /Card';
import './DrinkItem.css'

import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import BlenderIcon from '@mui/icons-material/Blender';


const DrinkItem = (props) => {


    return (
        <Card className='drink-item'>
            <div className='drink-item__type'>
                {props.type === 'Water' && <LocalDrinkIcon />}
                {props.type === 'Coffee' && <CoffeeIcon />}
                {props.type === 'Tea' && <EmojiFoodBeverageIcon />}
                {props.type === 'Juice' && <BlenderIcon />}
                <div data-testid='drinkItem'><h2>{props.type}</h2></div>
            </div>
            <div className='drink-item__type'>{props.amount}</div>
        </Card>
    )
}

export default DrinkItem;