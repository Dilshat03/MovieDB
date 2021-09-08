import React, {useEffect, useState} from 'react';
import {useParams, Link, useHistory} from "react-router-dom";
import axios from 'axios'
import BackBtn from "../../components/BackBTN/BackBtn";
import Spinner from "../../components/Spinner";
import OwlCarousel from 'react-owl-carousel';
import Trailers from "../../components/Trailers";



const FilmDetails = () => {
    const [film, setFilm] = useState({})
    const [actors, setActors] = useState([])
    const [trailers, setTrailers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [ActorLoading, setActorLoading] = useState(true)
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
            .then(({data}) => {
                setActors(data.cast)
                setActorLoading(false)
            })
        axios(`http://api.themoviedb.org/3/movie/${id}/videos?&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setTrailers(data.results))
    }, [id])

    if (isLoading && ActorLoading) {
        return <Spinner/>
    }
    return (
        <div className='details'>
            <BackBtn/>
            <div className='d-flex mb-5 details-films'>
                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${film.poster_path}`}
                     className='img-poster rounded mx-5' alt=""/>
                <div>
                    <h2>{film.title}</h2>
                    <h5>Дата релиза: {film.release_date}</h5>
                    <p>Рейтинг: {film.vote_average * 10}%</p>
                    <p>Бюджет: {film.budget > 0 ? `$${film.budget.toLocaleString()}` : '-'}</p>
                    <p>Сборы: {film.revenue > 0 ? `$${film.revenue.toLocaleString()}` : '-'}</p>
                    <p>Длительность: {Math.floor(film.runtime / 60)}ч {Math.floor(film.runtime % 60)}м</p>
                    <div className='d-flex'>Жанр:
                        {
                            film?.genres?.map(el =>
                                <p className='genre'> {el.name}</p>
                            )
                        }
                    </div>
                    {
                        trailers.slice(0, 1).map(item =>
                            <Trailers key={item.key} id={item.key}/>
                        )
                    }
                    <p className='w-900'>
                        <b>Обзор:</b> <br/>
                        {film.overview}</p>
                </div>
            </div>
                <OwlCarousel className='owl-theme text-center d-flex justify-content-center'  margin={-5} dots={false} items={8}>
                    {
                        actors.slice(0, 10).map(el =>
                            <Link to={`/actor/${el.id}`} key={el.id} className='text-secondary'>
                                <img src={el.profile_path ? `https://www.themoviedb.org/t/p/w100_and_h100_face${el.profile_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'} alt=""
                                    className=' img-actors text-center rounded'/>
                                <h5 className='actors-name'>{el.name}</h5>
                            </Link>
                        )
                    }
                    <button className='btn btn-more d-flex align-items-center justify-content-center text-center text-light' onClick={handleActors}>Смотреть еще <i className="fas fa-arrow-right"></i></button>
                </OwlCarousel>
        </div>
    );
};

export default FilmDetails;