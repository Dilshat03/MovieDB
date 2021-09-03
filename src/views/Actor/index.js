import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Actor = () => {
    const {id} = useParams()
    const [actor, setActor] = useState({})
    const [film, setFilm] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}?&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setActor(data))
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setFilm(data.cast))
    }, [id])

    return (
        <div>
           <div className='d-flex'>
               <div className='flex-column'>
                   <img
                       src={actor.profile_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${actor.profile_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
                       alt="" className='img-actor text-center rounded mx-5'/>
                   <p><b>Дата рождения:</b> <br/> {actor.birthday}</p>
                   <p><b>Место рождения:</b> <br/> {actor.place_of_birth}</p>
                   <p><b>Пол:</b> {actor.gender===1?'Женский':'Мужской'}</p>
                   <p><b>Также известность как:</b></p>
                   {
                       actor?.also_known_as?.map(el=>
                       <p className='flex-column'>{el}</p>
                       )
                   }
               </div>
               <div>
                   <h2>{actor.name}</h2>
                   <p><b>Биография:</b> {actor.biography}</p>
                   <p><b>Известность за:</b></p>
                  <div className="row">
                      {
                          film.slice(0,10).map(el=>
                              <Link to={`/film/${el.id}`} className='col-2 text-secondary text-center fs-6'>
                                      <img src={el.poster_path?`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`:'https://i.pinimg.com/280x280_RS/ed/03/06/ed0306b0f54a221a1a4d17823d354a18.jpg'} alt="" className=' img-actors'/>
                                  <p>{el.title}</p>
                              </Link>
                          )
                      }
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Actor;