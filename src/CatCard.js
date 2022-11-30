import CatToy from "./CatToy"

function CatCard({ cat }) {
    const displayToys = cat.toys.map(toy => {
        return (
        <CatToy key={toy.type} toy={toy} />
        )
    })

    return (
        <div>
            <h3>{cat.name}</h3>
            <img src={cat.image}/>
            <h4>Color: {cat.color}</h4>
            <h4>Personality: {cat.personality}</h4>
            <h4>Toys:</h4>
            {displayToys}
        </div>
    );
}

export default CatCard;