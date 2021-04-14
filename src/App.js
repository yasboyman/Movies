import React, { useState, useEffect } from 'react';
import logo from './assets/movie_logo.svg';
import './App.css';
import axios from "axios";
import Movie from './Components/Movies/index'

const App = () => {

     const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiKey =  '547b4693cebd0509a71cadc54d008d4f'


    const fetchData = async (path, callback) => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${path}?api_key=${apiKey} `)
            callback(response.data.results)
        } catch (e) {
            console.log('error', e)
        }
    }

    useEffect(() => {
        Promise.all([
            fetchData('top_rated', setMovies),


        ]).then(() => {
            setLoading(false)
        })
    }, [])

console.log(movies)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


      </header>
            <div>
                {movies && movies.map((movie) => (
                     <Movie
                         key={movie.id}
                         movie ={movie}
                         id={movie.id}
                         title={movie.title}
                         overview={movie.overview}
                         releaseDate={movie.release_date}



                     />
                ))}
            </div>

        {loading && 'Loading...'}
    </div>
  );
}

export default App;
