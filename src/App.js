import React,{useState} from 'react'
import './App.css';
import Categories from './components/Categories';
import Menu from './components/Menu';
import { data } from './components/data';

const allCategories =['all',...new Set(data.map((cat) => cat.category))] ;


function App() {

const[menuItems,setMenuItems] = useState(data);
const[categories,setCategories] = useState(allCategories);

const filterItems = (category) =>{
  if(category === 'all')
  {
    setMenuItems(data);
    return;
  }

const newItems = data.filter((item) => item.category === category)
setMenuItems(newItems)
}
  return (
    <div className="App">
      <Categories filterItems={filterItems} categories = {categories}/>
      <Menu menuItems = {menuItems}/>
    </div>
  );
}

export default App;
