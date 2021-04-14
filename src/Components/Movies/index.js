import React from 'react';


const Movie = ({key, movie, movieId, title, overview, releaseDate, posterPath, apiKey}) => {


    const image_API = 'https://image.tmdb.org/t/p/w500'




    return (
        <div  className='movies_container'>

            <div className={'movie_info'}>
                <h3> {title} </h3>
                <h4> {overview} </h4>
                <h4> Release Date: {releaseDate} </h4>
                <img src={`${image_API}${posterPath}`}  />


            </div>


        </div>
        )

}

    export default Movie