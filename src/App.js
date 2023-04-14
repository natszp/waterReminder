import { useState } from 'react';
import { Card } from '@material-ui/core';
import './App.css';
import DrinksList from './components/Drinks/DrinksList';
import NewDrink from './components/NewDrink/NewDrink';

  const DUMMY_DRINKS = [
    { type: 'water', amount: 200 },
    { type: 'tea', amount: 100 },

  ]

const App = () => {
  const [drinks, setDrinks] = useState(DUMMY_DRINKS)


  const addToDrinksHandler = (drink) => {
    setDrinks(prevState=> {
      return [drink, ... prevState]
    }
      )
  }


  return (
    <div className="App">
      <Card>
        <NewDrink onAddDrinkToDrinks={addToDrinksHandler}/>
        <DrinksList drinks={drinks} />
      </Card>
    </div>
  );
}

export default App;
