import CatCard from "./CatCard";

function CatsList({ cats }) {

    const displayCats = cats.map(cat => {
        return (
            <CatCard key={cat.name} cat={cat}/>
        )
    })

    return (
        <div>
            {displayCats}
        </div>
    );
}

export default CatsList;