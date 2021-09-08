import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../../components/Spinner";
import Search from "../../components/Search/Search";

const Movies = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        axios(`https://api.themoviedb.org/3/discover/movie?page=${page}&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data: {results}}) => {
                    setMovies(results)
                    setIsLoading(false)
                })

    }, [page])

    const handlePage = (num) => {
        setPage(num)
    }
    if (isLoading) {
        return <Spinner/>
    }
    return (
        <div className='movies'>
            <div className="d-flex mb-5 justify-content-center ">
                {
                    Array(6).fill(0).map((el, idx) =>
                        <div key={el.id}>
                            <button onClick={() => handlePage(idx + 1)}
                                    className={`mx-2 btn btn-warning ${page === idx + 1 && 'btn-danger'}`}>{idx + 1}</button>
                        </div>
                    )
                }
            </div>
            <div className='row text-center '>
                {
                    movies.map(el =>
                            <div key={el.id} className='col-md-3 text-center'>
                            <Link to={`/film/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${el.poster_path}`}
                                     className='img-films movie-card' alt=""/>
                                <h3 className='mb-5 mt-3 text-center fs-5 text-success movies'>{el.title}</h3>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Movies;