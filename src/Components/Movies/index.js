import React from 'react';
import './movies.css'

// component renders Data on UI- poster and overview

const Movie = ({key, movie, movieId, title, overview, releaseDate, posterPath, apiKey, handleClick, modalIsOn}) => {
    const image_API = 'https://image.tmdb.org/t/p/w200'

    return (
        <div className={ modalIsOn ? 'movie_modal' : 'movie'} onClick={handleClick}>
            {posterPath ?  <img src={`${image_API}${posterPath}`} alt={'title'}  /> : <div>No image</div>}
            <div className='move-info'>
                <h3> {title && title} </h3>
            </div>
            <div className={ !modalIsOn ? 'move-desc-popup'  : 'move-desc'} >
                { overview ? <h2>Overview:</h2> : <h2> No overview Available</h2>}
                <p> {overview} </p>
            </div>
        </div>
    )
}

export default Movie