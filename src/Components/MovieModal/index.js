import React from 'react'
import {Button, Modal} from '@material-ui/core';
import './movie_modal.css';
import Movie from "../Movies";




const MovieModal = ({isOpen, onClose, currentMov}) => {


    const handleClose = () => {
        onClose()
        // setSelectedActor(null);
        // setCurrentMovie([]);
    }

    console.log('MODAL', currentMov.genre_ids)

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
                         <h2> {currentMov.title} </h2>
                        <div className='movie-info'>
                            <Movie
                                posterPath={currentMov.backdrop_path}
                                overview={currentMov.overview}


                            />
                            {/*{  currentMov.genre_ids.map( item => {*/}
                            {/*    return (*/}
                            {/*        <Button style={{color:'white'}}>item</Button>*/}
                            {/*    )*/}

                            {/*})}*/}

                        </div>

                 </div>
            </Modal>

    )



}


export default MovieModal