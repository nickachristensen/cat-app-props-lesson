import CatToy from "./CatToy"

function CatCard({ cat }) {
    const displayToys = cat.toys.map(toy => {
        return (
            <CatToy key={toy.type} toy={toy} />
        )
    })

    return (
        <div id="catCard">
            <h2 id="catHeader">{cat.name}</h2>
            <img id="catCardImg" src={cat.image} />
            <h3 id="catPersonality">Personality: {cat.personality}</h3>
            <h3 id="catColor">Color: {cat.color}</h3>
            <h4 id="catToysHead">Toys</h4>
            {displayToys}
        </div>
    );
}

export default CatCard;