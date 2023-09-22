import { useState } from "react";
function MyRecipeComponent({label, image, calories, ingredients, link}) {
    
    const [show, toggleShow] = useState(false);



    return(<div className="recipeContainer">
        <div>
        <div className="smallContainer">
        <img src={image} alt="food"/>
        <div className="expl">
            <h2 className="label">{label}</h2>
            <p>{calories.toFixed()} calories</p>
            <p className="link">{link}</p>
            <button onClick={() => toggleShow(!show)} className="showIngr">{show ? "Hide ingredients" : "Show ingredients"}</button>
            {show && <ul className="container list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                    </li>
                    
                ))}
            </ul>
            
            }
            </div>
            </div>


        </div>
        


        
    </div>)
}
export default MyRecipeComponent;