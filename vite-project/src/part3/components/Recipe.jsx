import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {
    const { recipeMarkdown } = props;
    if (!recipeMarkdown) return null;
    return (
        <section>
            <h2>Recipe</h2>
            <p>Here's a recipe based on your ingredients!</p>
            <div>
                <ReactMarkdown>{recipeMarkdown}</ReactMarkdown>
            </div>
        </section>
    );
}
