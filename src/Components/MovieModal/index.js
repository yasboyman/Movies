import React, {useEffect, useState} from 'react'
import {Button, Modal} from '@material-ui/core';
import './movie_modal.css';
import Movie from "../Movies";
import {FaWindowClose} from "react-icons/fa";
import Characters from '../Characters';
import axios from 'axios';

const MovieModal = ({isOpen, onClose, currentMov, movieGenre, apiKey}) => {
    const [cast, setCast] = useState([])

    // fetches cast data, sends to Character component as Props

    useEffect(() => {
        currentMov.id && axios.get(`https://api.themoviedb.org/3/movie/${currentMov.id}/credits?api_key=${apiKey}`)
            .then((response) => {
                setCast(response.data)
            }, (error) => {
                console.log(error);
            })
    }, [currentMov.id])

    if (!currentMov) return null;

    // checks movie id === genre id - gives us genre array
    const genres = currentMov.genre_ids && movieGenre.filter(genre => currentMov.genre_ids.includes(genre.id))


    const handleClose = () => {
        onClose()
        setCast(null)
    }

    return (
        <Modal
            open={isOpen}
            onBackdropClick={handleClose}
            className="movie-modal"
        >
            <div className='movie-modal-container'>
                <FaWindowClose size={40} className="icon" onClick={handleClose}/>
                <h2 className='movie--modal-title'> {currentMov.title} </h2>

                <div className={'movie_genre'}>
                    {genres && genres.map(genre =>
                        <button>{genre.name} </button>)}
                </div>
                <div className='movie-info'>
                    <Movie                                              //re-using Movie component
                        posterPath={currentMov.backdrop_path}
                        overview={currentMov.overview}
                        modalIsOn
                    />
                </div>

                <div className={'characters'}>
                    <Characters                                     // Character Component receives data for cast info
                        key={currentMov.id}
                        movie={currentMov}
                        movieId={currentMov.id}
                        apiKey={apiKey}
                        cast={cast}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default MovieModal