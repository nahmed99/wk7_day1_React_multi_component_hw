import Film from './Film';


const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return (
            <li className="film-item" key={film.id}>
                <Film name={film.name}
                    url={film.url}
                     />
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