import React from 'react';
import './movies.css'


const Movie = ({key, movie, movieId, title, overview, releaseDate, posterPath, apiKey, handleClick, isOverview}) => {


    const image_API = 'https://image.tmdb.org/t/p/w200'




    return (


            <div className={'movie'} onClick={handleClick}>
                <img src={`${image_API}${posterPath}`} alt={'title'}  />

                <div className='move-info'>
                    <h3> {title} </h3>
                </div>
                <div   className={ isOverview ? 'move-desc-popup'  : 'move-desc'} >
                    { overview ? <h2>Overview:</h2> : !isOverview && <h2> No overview Available</h2>}
                    <p> {overview} </p>

                </div>

        </div>
        )

}

    export default Movie