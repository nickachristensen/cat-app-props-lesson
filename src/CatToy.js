function CatToy({ toy }) {
    let {type, hasCatnip, excitmentRating} = toy



    return (
        <div>
            <p>{type}</p>
            <h4>Contains the nip?</h4>
            {hasCatnip ? <p>CATNIP!!!</p> : <p>No Catnip</p>}
            {hasCatnip ? <img src="https://i.imgur.com/Lob9W2t.jpeg"/> : <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/176/107/business-cat.jpg"/>}
            <p>{excitmentRating}</p>
        </div>
    )
}

export default CatToy;