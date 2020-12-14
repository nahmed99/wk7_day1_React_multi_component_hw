import Film from './Film';


const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return (
            <li className="film-item">
                <Film name={film.name}
                    url={film.url}
                    key={film.id} />
            </li>
        );
    });

    return (
        
        <div className="film-list">
            <ul>
                {filmNodes}
            </ul>
        </div>
        

    );
}

export default FilmList;