
function myRecipeComponent({label, image, calories, ingredients, link}) {
    




    return(<div className="recipeContainer">
        <div>
        <div className="smallContainer">
        <img src={image} alt="food"/>
        <div className="expl">
            <h2 className="label">{label}</h2>
            <p>{calories.toFixed()} calories</p>
            <p className="link">{link}</p>
            <button className="showIngr"><h2>Show ingredients</h2></button>
            </div>
            </div>

            <ul className="container list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                    </li>
                    
                ))}
            </ul>
        </div>
        


        
    </div>)
}
export default myRecipeComponent;