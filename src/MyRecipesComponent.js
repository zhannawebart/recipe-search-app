function MyRecipesComponent({label, image, calories, ingredients}) {
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <img className="style-img" src={image} alt="food"/>
            </div>

            <ul className="list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}><img src="https://img.icons8.com/ultraviolet/256/checked.png" 
                    className="icon" alt="icon"/>{ingredient}</li>
                ))}
            </ul>
            <div className="container">
                <p className="par">{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}

export default MyRecipesComponent;