import { useState } from 'react';
import { Card } from '@material-ui/core';
import './App.css';
import DrinksList from './components/Drinks/DrinksList';
import NewDrink from './components/NewDrink/NewDrink';
import Chart from './components/Chart/Chart';


const App = () => {
  const [drinks, setDrinks] = useState([])

  let drinksAmount = drinks.map(drink => Number(drink.amount)).reduce((a, b) => a + b, 0);


  const addToDrinksHandler = (drink) => {
    setDrinks(prevState => {
      return [drink, ...prevState]
    }
    )
  }



  return (
    <div className="App">
      <Card>
        <Chart drinksAmount={drinksAmount}/>
        <NewDrink onAddDrinkToDrinks={addToDrinksHandler} />
        <DrinksList drinks={drinks} />
      </Card>
    </div>
  );
}

export default App;
