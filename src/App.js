import { Card } from '@material-ui/core';
import './App.css';
import DrinksList from './components/Drinks/DrinksList';
import NewDrink from './components/NewDrink/NewDrink';

function App() {

  const drinks = [
    { type: 'water', amount: 200 },
    { type: 'tea', amount: 100 },


  ]

  return (
    <div className="App">
      <Card>
        <NewDrink />
        <DrinksList drinks={drinks} />
      </Card>
    </div>
  );
}

export default App;
