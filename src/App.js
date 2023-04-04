import './App.css';
import DrinksList from './components/Drinks/DrinksList';
import DrinkForm from './components/NewDrink/DrinkForm';

function App() {

  const drinks = [
    {type: 'water', amount:200},
    {type: 'tea', amount: 100},

    
  ]

  return (
    <div className="App">
      <DrinksList drinks={drinks}/>
      <DrinkForm />
    </div>
  );
}

export default App;
