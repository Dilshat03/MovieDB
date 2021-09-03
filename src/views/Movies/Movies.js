import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Movies = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])


    useEffect(() => {

        axios(`https://api.themoviedb.org/3/discover/movie?page=${page}&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data: {results}}) => setMovies(results))

    }, [page])

    const handlePage = (num) => {
        setPage(num)
    }

    return (
        <div>
            <div className="d-flex mb-5 justify-content-center">
                {
                    Array(6).fill(0).map((el, idx) =>
                        <div key={el.id}>
                            <button onClick={() => handlePage(idx + 1)}
                                    className={`mx-2 btn btn-warning`}>{idx + 1}</button>
                        </div>
                    )
                }
            </div>
            <div className='row'>
                {
                    movies.map(el =>
                        <div key={el.id} className='col-md-3 text-center'>
                            <Link to={`/film/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${el.poster_path}`}
                                     className='img-films' alt=""/>
                                <h3 className='mb-5 mt-3 text-center fs-5 text-success'>{el.title}</h3>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Movies;