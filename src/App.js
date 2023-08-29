import './App.css';
import { useEffect, useState } from 'react';
import video from './video.mp4';
import MyRecipeComponent from './MyRecipeComponent';

function App() {
  // https://api.edamam.com/api/recipes/v2?type=public&q=chiken&app_id=d0059507&app_key=%205bdccb26536eb89e6e93ef1fbf28a6af


  const MY_KEY = "%205bdccb26536eb89e6e93ef1fbf28a6af";
  const MY_ID = "d0059507";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("chicken");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits)
    }
    getRecipe()
  },[wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
        </video>
        <h1>FIND A RECIPE WHICH FITS YOU</h1>
      </div>
      
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input onChange={myRecipeSearch} value={mySearch} className='search'/>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <h2>search</h2>
        </button>
      </div>

      {myRecipes.map((element,index) => (
        <MyRecipeComponent key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories} 
        ingredients={element.recipe.ingredientLines}
        link={element.recipe.url}/>
      )
      )}

    </div>
  );
}

export default App;
