
const Card = ( {pokemonList, clickCard } ) => {

    return (
        <div className="card-container">
        {pokemonList.map(item => {
            return (
                <div className="card" key={item.name} onClick={clickCard} id={item.name}>
                    <img src={item.image} alt={item.name}/>
                    {item.name}
                </div>
            )
        })}
        </div>
    )

}

export default Card