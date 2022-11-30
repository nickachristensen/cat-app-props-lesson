function CatToy({ toy }) {
    let { type, hasCatnip, excitmentRating } = toy



    return (
        <div id="catToyCard">
            <h5>Toy Type:</h5>
            <p>{type}</p>
            <h5>Does it have catnip?</h5>
            <div id="catToys">
                {hasCatnip ? <p>THIS TOY HAS NIP!!!</p> : <p>This toy has no nip.</p>}
                {hasCatnip ? <img id="catToyImg" src="https://i.imgur.com/Lob9W2t.jpeg" /> : <img id="catToyImg" src="https://i.kym-cdn.com/photos/images/newsfeed/000/176/107/business-cat.jpg" />}
            </div>
            <h5>Excitment Rating:</h5>
            <p>{excitmentRating}/10 beans</p>
        </div>
    )
}

export default CatToy;