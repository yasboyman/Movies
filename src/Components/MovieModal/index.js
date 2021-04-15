import React from 'react'
import {Button, Modal} from '@material-ui/core';
import './movie_modal.css';




const MovieModal = ({isOpen, onClose}) => {


    const handleClose = () => {
        onClose()
        // setSelectedActor(null);
        // setCurrentMovie([]);
    }

    return (
        <Modal
             open={isOpen}
             onBackdropClick={handleClose}
             className="movie-modal"
             >
                    <div className='movie-div'>
                         <h2> Movie Modal </h2>


                 </div>
            </Modal>

    )



}


export default MovieModal