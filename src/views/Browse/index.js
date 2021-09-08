import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";
import Spinner from "../../components/Spinner";


const Browse = () => {
    const [films, setFilms] = useState({})
    const [page, setPage] = useState(1)
    const {name} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?query=${name}&page=${page}&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setFilms(data)
                setIsLoading(false)
            })

    }, [page, name])


    let pageButtons = ""
    if (films.total_pages > 1 && page === 1) {
        pageButtons = (
            <button className='pageButton' onClick={() => setPage(page + 1)}>
                <i className="fas fa-arrow-circle-right"></i>
            </button>)
    } else if (films.total_pages > page && page > 1) {
        pageButtons = (<>
            <div className='buttons-group'>
                <button className='pageButton' onClick={() => setPage(page - 1)}>
                    <i className="fas fa-arrow-circle-left"></i>
                </button>
                <button className='pageButton' onClick={() => setPage(page + 1)}>
                    <i className="fas fa-arrow-circle-right"></i>
                </button>
            </div>
        </>)
    } else if (films.total_pages === page) {
        pageButtons = (<button className='pageButton' onClick={() => setPage(page - 1)}>
            <i className="fas fa-arrow-circle-left"></i>
        </button>)
    }

    if (isLoading) {
        return <Spinner/>
    }
    return (
        <div>
            <div className="row">
                {
                    films?.results?.length ? films?.results?.map(movie =>
                            <div  key={movie.id} className=' col-md-2 text-center'>
                                <Link to={`/film/${movie.id}`}>
                                        <img className=' me-5 my-3 img-films' src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://i.pinimg.com/280x280_RS/ed/03/06/ed0306b0f54a221a1a4d17823d354a18.jpg'} alt=""/>
                                        <h4 className='mb-5 mt-2 text-center fs-5 text-success'>{movie.title}</h4>
                                </Link>
                            </div>
                    ) : <h2>Мындай фильм жок!</h2>
                }
            </div>
            {pageButtons}

        </div>
    );
};

export default Browse;