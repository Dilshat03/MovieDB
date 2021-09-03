import React, {useEffect, useState} from 'react';
import {useParams, Link, useHistory} from "react-router-dom";
import axios from 'axios'
import BackBtn from "../../components/BackBTN/BackBtn";

const FilmDetails = () => {
    const [film, setFilm] = useState({})
    const [actors, setActors] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    const history = useHistory()

    const handleActors = () => {
      history.push(`/allActors/${id}`)
    }
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setFilm(data)
                setIsLoading(false)
            })
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setActors(data.cast))
    }, [id])

    if (isLoading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <div>
            <BackBtn />
            <div className='d-flex mb-5'>
                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${film.poster_path}`}
                     className='img-poster rounded mx-5' alt=""/>
                <div>
                    <h2>{film.title}</h2>
                    <h5>Дата релиза: {film.release_date}</h5>
                    <p>Рейтинг: {film.vote_average * 10}%</p>
                    <p>Бюджет: {film.budget > 0 ? `$${film.budget.toLocaleString()}` : '-'}</p>
                    <p>Сборы: {film.revenue > 0 ? `$${film.revenue.toLocaleString()}` : '-'}</p>
                    <p>Длительность: {Math.floor(film.runtime/60)}ч {Math.floor(film.runtime%60)}м</p>
                    <div className='d-flex'>Жанр:
                        {
                            film.genres.map(el =>
                                <p className='genre'> {el.name}</p>
                            )
                        }
                    </div>
                    <div>{film?.production_countries[0]?.name > 1 ? 'Страны:' : 'Страна:'} {film.production_countries.map(el =>
                        <p className='mb-0'>
                            <i className="fas fa-flag"></i> {el.name}</p>)}</div>
                    <p className='w-900'>
                        <b>Обзор:</b> <br/>
                        {film.overview}</p>
                </div>
            </div>
            <div className='actors row'>
                {
                    actors.slice(0,10).map(el =>
                        <Link to={`/actor/${el.id}`} key={el.id} className='col-1 text-center text-secondary'>
                            <img
                                src={el.profile_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${el.profile_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
                                alt=""
                                className='img-actors text-center rounded'/>
                            <h5 className='actors-name'>{el.name}</h5>
                        </Link>
                    )
                }
            </div>
            <button className='btn d-flex align-items-center' onClick={handleActors}>Смотреть еще <i className="fas fa-arrow-right"></i></button>
        </div>
    );
};

export default FilmDetails;