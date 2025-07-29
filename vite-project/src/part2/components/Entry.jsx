function Entry(props) {
    let { entry } = props;
    return (
        <article className="entry">
            <div className="entry-photo">
                <img src={entry.img?.src} alt={entry.img?.alt} />
            </div>
            <div className="entry-details">
                <div className="line1">
                    <div className="country">{entry.country}</div>
                    <a href="{entry.googleMapsLink}" className="location-link">View on Google Maps</a>
                </div>
                <div className="line2">
                    <h2 className="location-name">{entry.title}</h2>
                </div>
                <div className="line3">
                    <div className="dates">{entry.dates}</div>
                </div>
                <div className="line4">
                    <p className="description">{entry.text}</p>
                </div>
            </div>
        </article>
    );
}

export default Entry;
