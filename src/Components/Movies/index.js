import React from 'react';
import './movies.css'


const Movie = ({key, movie, movieId, title, overview, releaseDate, posterPath, apiKey}) => {


    const image_API = 'https://image.tmdb.org/t/p/w200'




    return (
        <div className='movies_container'>

            <div className={'movie'}>
                <img src={`${image_API}${posterPath}`} alt={'title'}  />

                <div className='move-info'>
                    <h3> {title} </h3>
                    {/*<h4> {overview} </h4>*/}
                    {/*<h4> Release Date: {releaseDate} </h4>*/}
                </div>
            </div>





        </div>
        )

}

    export default Movie