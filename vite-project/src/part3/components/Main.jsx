import { useState } from 'react';
// import React from "react"; React.useState(..);
import Recipe from './Recipe';
import IngredientList from './IngredientList';
import GetRecipeFromClaude from '../GetRecipeFromClaude.js';
import recipeExampleMarkdown from '../recipeExampleMarkdown.js';

function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
    const [isRecipeLoading, setIsRecipeLoading] = useState(false);
    //const [recipeMarkdown, setRecipeMarkdown] = useState(recipeExampleMarkdown);
    const [recipeMarkdown, setRecipeMarkdown] = useState(null);

    /**
     * This style of handling a form submission has been deprecated in React 19.
     *
    function handleSubmit(event) {
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl);
        const newIngredient = formData.get('ingredient');
        console.log("Adding ingredient", newIngredient);
        // use array spread syntax
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        formEl.reset();
    }
     */

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        console.log("Adding ingredient", newIngredient);
        // use array spread syntax
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    function clearIngredients() {
        if (isRecipeLoading) return;
        setIngredients([]);
        setRecipeMarkdown(null);
    }

    function removeIngredient(index) {
        if (isRecipeLoading) return;
        setIngredients(prevIngredients => prevIngredients.filter((_, i) => i !== index));
    }

    function getRecipe() {
        setIsRecipeLoading(true);
        GetRecipeFromClaude(ingredients).then(responseRecipeMarkdown => {
            setRecipeMarkdown(responseRecipeMarkdown);
            setIsRecipeLoading(false);
        });
    }
    
    return (
        <main>
            <form action={addIngredient} className="ingredient-form">
                <input
                    type="text"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label="Ingredient"
                />
                <button disabled={isRecipeLoading}>Add Ingredient</button>
            </form>
            <IngredientList
                ingredients={ingredients}
                getRecipe={getRecipe}
                removeIngredient={removeIngredient}
                clearIngredients={clearIngredients}
                isRecipeLoading={isRecipeLoading}
            />
            <Recipe recipeMarkdown={recipeMarkdown} />
        </main>
    );
}

export default Main;
