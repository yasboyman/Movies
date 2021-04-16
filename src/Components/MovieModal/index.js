import React from 'react'
import {Button, Modal} from '@material-ui/core';
import './movie_modal.css';
import Movie from "../Movies";
import { FaWindowClose } from "react-icons/fa";




const MovieModal = ({isOpen, onClose, currentMov, movieGenre}) => {




    if (!currentMov) return null;


    // console.log('movieGenre',movieGenre)
    // console.log('!currentMovID!',currentMov.genre_ids)





    // const mapping =  currentMov.genre_ids && currentMov.genre_ids.map( id => id)

     const  filteringGenre = currentMov.genre_ids && movieGenre && movieGenre.map( genre => {

        const filtered =  currentMov.genre_ids.find( x =>  x === genre
         )

         if (genre.id === filtered ){

             console.log('WORKING!!!!!!!!!!!!!!', genre.name)         }
         return (
                 <div>
             <Button>genre.name</Button>
             </div>
         )

     })



console.log('h', filteringGenre)


    const handleClose = () => {
        onClose()
        // setSelectedActor(null);
        // setCurrentMovie([]);
    }


    // movieId={currentMovie.id}
    // title={currentMovie.title}
    // overview={currentMovie.overview}
    // releaseDate={currentMovie.release_date}
    // posterPath = {currentMovie.poster_path}
    // apiKey={apiKey}

    return (
        <Modal
             open={isOpen}
             onBackdropClick={handleClose}
             className="movie-modal"
             >
                    <div className='movie-modal-container'>
                        <FaWindowClose size={40} className="icon" onClick={handleClose}/>

                        <h2 className='movie--modal-title'> {currentMov.title} </h2>
                        <div className='movie-info'>
                            <Movie
                                posterPath={currentMov.backdrop_path}
                                overview={currentMov.overview}
                                modalIsOn

                            />

                        </div>

                 </div>
            </Modal>

    )



}


export default MovieModal