function CatsList({ cats }) {

    const displayCats = cats.map(cat => {
        return (
            <CatCard />
        )
    })

    return (
        <div>
            {displayCats}
        </div>
    );
}

export default CatsList;