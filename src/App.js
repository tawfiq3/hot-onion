import './App.css';
import Home from './Components/Home/Home';
import $ from 'jquery';
import { createContext, useState } from 'react';

export const ItemContext = createContext()

function App() {

  const [meal,setMeal] = useState([])
  
  return (
    <ItemContext.Provider value = {[meal,setMeal]}>
         <Home></Home>
    </ItemContext.Provider>
  );
}

export default App;
