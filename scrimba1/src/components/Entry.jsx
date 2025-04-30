function Entry(props) {

    const {mainImage, markerImage, countryName, mapLink, title, date, description} = props.dataObj.entry
    return (
        <article className="jounal-entry">
            <div className="main-image-container">
                <img className="main-image" src={mainImage.src} alt={mainImage.alt}/> 
            </div>
            <div className="info-container">
                <img className="marker-image" src={markerImage} alt="loc-icon" />
                <span className="country">{countryName}</span>
                <a href={mapLink}>View on Google Maps</a>
                <h2 className="entry-title">{title} </h2>
                <p className="trip-dates">{date} </p>
                <p className="entry-text">{description}</p>
            </div>
        </article>
    )
}

export default Entry;