import './App.css';
import { useCallback, useEffect, useState } from 'react';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "2a113eaa";
  const MY_KEY = "fcbb72a9f79451df3dd3916bbebaeea5";
  
  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('egg');

  const getRecipe = useCallback(async () => {
    const response = await fetch(` https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    //console.log(data.hits);
    setMyRecipes(data.hits);
  }, [wordSubmitted])

  useEffect(() => {
    getRecipe()
  }, [getRecipe])

  const myRecipeSearch = (e) => {
    //console.log(e.target.value);
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input className="search" placeholder="Enter an ingredient..." type="text" onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </div>
      
      <div>
        {myRecipes.map((element, index) => (
          <MyRecipesComponent key={index} label={element.recipe.label} 
          image={element.recipe.image} 
          calories={element.recipe.calories} 
          ingredients={element.recipe.ingredientLines}/>
        ))}
      </div>
    </div>
  );
}

export default App; 
