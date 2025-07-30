export default function Recipe(props) {
    return (
        <>
            {
                props.recipeDom ?
                <section>
                    <h2>Recipe</h2>
                    <p>Here's a recipe based on your ingredients!</p>
                    {props.recipeDom}
                </section>
                : null
            }
        </>
    );
}
