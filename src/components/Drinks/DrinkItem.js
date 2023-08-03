import { useState } from 'react';

import Card from '../UI /Card';
import classes from './DrinkItem.module.css'
import Modal from './../UI /Modal'
import RemoveDrinkForm from './RemoveDrinkForm';

import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import BlenderIcon from '@mui/icons-material/Blender';
import Button from '@mui/material/Button';



const DrinkItem = (props) => {
    const [shownModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true)
        console.log(shownModal)
    }

    const hideModalHandler = () => {
        setShowModal(false)
    }

    const removeDrinkHandler = (drink) => {
        props.onRemoveDrink(drink)
      }


    
    const content = <RemoveDrinkForm id={props.id} amount={props.amount} type={props.type} onRemoveDrinkData={removeDrinkHandler}/>
    

    return (
        <Card className={classes['drink-item']}>
            <div className={classes['drink-item__type']}>
                {props.type === 'Water' && <LocalDrinkIcon />}
                {props.type === 'Coffee' && <CoffeeIcon />}
                {props.type === 'Tea' && <EmojiFoodBeverageIcon />}
                {props.type === 'Juice' && <BlenderIcon />}
                <div data-testid='drinkItem'><h2>{props.type}</h2></div>
            </div>
            <div className={classes['drink-item__type']}>{props.amount}</div>
            <Button onClick={showModalHandler}>Delete</Button>
            {shownModal && <Modal onOpen={shownModal} content={content} buttonContent='Close' onConfirm={hideModalHandler} />}
        </Card>
    )
}

export default DrinkItem;