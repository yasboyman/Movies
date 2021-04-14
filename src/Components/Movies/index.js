import React from 'react';
import './movies.css'


const Movie = ({key, movie, movieId, title, overview, releaseDate, posterPath, apiKey}) => {


    const image_API = 'https://image.tmdb.org/t/p/w200'




    return (


            <div className={'movie'}>
                <img src={`${image_API}${posterPath}`} alt={'title'}  />

                <div className='move-info'>
                    <h3> {title} </h3>
                </div>
                <div className='move-desc-popup'>
                    <h2>Overview:</h2>
                    <p> {overview} </p>

                </div>

        </div>
        )

}

    export default Movie