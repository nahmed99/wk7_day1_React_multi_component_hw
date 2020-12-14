import Film from './Film';


const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return (
            <Film name={film.name}
                  url={film.url}
                  key={film.id} />
        );
    });

    return (
        
        <div className="film-list">
            {filmNodes}
        </div>
        

    );
}

export default FilmList;