import "./styles.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200) + "...";
    }

    return (
        <section
            className="feature"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
        >
            <div className="feature--vertical">
                <div className="feature--horizontal">
                    <div className="feature--name">{item.original_name}</div>
                    <div className="feature--info">
                        <div className="feature--points">{item.vote_average} pontos</div>
                        <div className="feature--year">{firstDate.getFullYear()}</div>
                        <div className="feature--seasons">
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? "s" : ""}
                        </div>
                        <div className="feature--description">{description}</div>
                        <div className="feature--buttons">
                            <a href={`/watch/${item.id}`} className="watch--button">
                                ▶ <span className="assistir">Assistir</span>
                            </a>

                            <a href={`/list/add/${item.id}`} className="mylist--button ">
                                + Minha Lista
                            </a>
                        </div>
                        <div className="feature--genres">
                            <strong>Gêneros: </strong>
                            {genres.join(", ")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
