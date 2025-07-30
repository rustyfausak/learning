export default function IngredientList(props) {
    const ingredientListItems = props.ingredients.map((ingredient, index) => (
        <li key={index}>
            <button
                aria-label="Remove Ingredient"
                className="remove-ingredient"
                onClick={() => props.removeIngredient(index)}
            >&times;</button>
            {ingredient}
        </li>
    ));

    return (
        <>
            {
                props.ingredients.length > 0 ?
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientListItems}
                    </ul>
                    <a href="#" className="clear-ingredients" onClick={props.clearIngredients}>Clear ingredients</a>
                    {
                        props.ingredients.length > 2 ?
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button disabled={props.isRecipeLoading} onClick={props.getRecipe}>
                                { props.isRecipeLoading ? "Loading" : "Get a recipe" }
                            </button>
                        </div>
                        : null
                    }
                </section>
                : null
            }
        </>
    );
}
