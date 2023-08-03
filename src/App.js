import { useState } from 'react';
import { Card } from '@material-ui/core';
import classes from './App.module.css';
import Login from './components/Login/Login'
import DrinksList from './components/Drinks/DrinksList';
import NewDrink from './components/NewDrink/NewDrink';
import Chart from './components/Chart/Chart';
import Header from './components/Layout/Header';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [drinks, setDrinks] = useState([])

  const loginHandler = (username, password) => {
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }



  let drinksAmount = drinks.map(drink => Number(drink.amount)).reduce((a, b) => a + b, 0);

  const addToDrinksHandler = (drink) => {
    setDrinks(prevState => {
      return [drink, ...prevState]
    }
    )
  }

  const removeDrinkHandler = (drink) => {
    console.log(drink, 'in App')
  }

  return (
    <div className={classes.App}>
      <Card>
        {!isLoggedIn &&
          <Login onLogin={loginHandler} />}
        {isLoggedIn && <>
          <Header text='Welcome' buttonText='Logout' onClick={logoutHandler} />
          <Chart drinksAmount={drinksAmount} />
          <NewDrink onAddDrinkToDrinks={addToDrinksHandler} />
          <DrinksList drinks={drinks} onRemoveDrinkFromDrinks={removeDrinkHandler}/>
        </>}

      </Card>
    </div>
  );
}

export default App;
