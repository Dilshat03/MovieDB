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


    if (isLoading) {
        return <Spinner/>
    }
    return (
        <div>
            <div className="row">
                {
                    films?.results?.length ? films?.results?.map(movie =>
                        <>
                            <div  key={movie.id} className='col-3'>
                                <Link to={`/film/${movie.id}`} >
                                        <img className='search-img me-5 my-3' src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://i.pinimg.com/280x280_RS/ed/03/06/ed0306b0f54a221a1a4d17823d354a18.jpg'} alt=""/>
                                        <h4>{movie.title}</h4>
                                </Link>
                            </div>
                        </>
                    ) : <h2>Мындай фильм жок!</h2>
                }
            </div>

        </div>
    );
};

export default Browse;