import Entry from './Entry.jsx';
import data from './../data.js';

function Body() {
    // could also use object spread syntax to pass props like this:
    // const entries = data.map(entry => <Entry key={entry.id} {...entry} />);
    const entries = data.map(entry => (
        <Entry
            key={entry.id}
            entry={entry}
        />
    ))
    return (
        <main>
            {entries}
        </main>
    );
}

export default Body;
