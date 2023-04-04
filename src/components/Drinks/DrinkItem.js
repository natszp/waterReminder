import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassWater } from '@fortawesome/free-solid-svg-icons';
import Card from '../UI /Card';
import './DrinkItem.css'



const DrinkItem = (props) => {

    return (
        <Card className='drink-item'>
            <div className='drink-item__type'>
                <FontAwesomeIcon icon={faGlassWater} />
                <div><h2>{props.type}</h2></div>
            </div>
            <div className='drink-item__type'>{props.amount}</div>
        </Card>
    )
}

export default DrinkItem;