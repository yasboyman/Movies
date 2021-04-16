import React, { useState, useEffect } from 'react';
import logo from './assets/movie_logo.svg';
import './App.css';
import axios from "axios";
import Movie from './Components/Movies/index'
import MovieModal from "./Components/MovieModal";

const App = () => {

     const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchedMovie, setSearchedMovie] = useState([])
    const [currentMovie, setCurrentMovie] = useState([])
    const [movieGenre, setMovieGenre] = useState([])

    const apiKey =  '547b4693cebd0509a71cadc54d008d4f'


console.log('this is genre', movieGenre)


    const fetchData = async (path, callback) => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/${path}?api_key=${apiKey} `)
                console.log('RE!!!!!!,', response.data)
            callback(response.data )
        } catch (e) {
            console.log('error', e)
        }
    }

    useEffect(() => {
        Promise.all([
            fetchData('movie/top_rated', setMovies),
            fetchData('genre/movie/list', setMovieGenre),
        ]).then(() => {
            setLoading(false)
        })
    }, [])

console.log('this is movies',movies)




    const  handleInputSubmit = (e) => {
        e.preventDefault()
              axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchedMovie}`)
            .then((response) => {
          setMovies(response.data.results)
            }, (error) => {
                console.log(error);
            })
        setSearchedMovie('')
  }
  const handleInput = (e) => {
        setSearchedMovie(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className='search'>
            <form onSubmit={handleInputSubmit}>

                <input
                    className='search'
                    type='text'
                    placeholder='Search...'
                    onChange={ (e) => handleInput(e)}

                />

            </form>

        </div>


      </header>

        <MovieModal
        isOpen={currentMovie !== null}
        onClose={() => setCurrentMovie(null)}
        currentMov = {{...currentMovie}}

        />

            <div className={'movie-container'}>
                {movies.results && movies.results.map((movie) => (
                     <Movie
                         key={movie.id}
                         movie ={movie}
                         movieId={movie.id}
                         title={movie.title}
                         overview={movie.overview}
                         releaseDate={movie.release_date}
                         posterPath = {movie.poster_path}
                         apiKey={apiKey}
                         handleClick={() => setCurrentMovie(movie)}
                         isOverview





                     />
                ))}
            </div>

        {loading && 'Loading...'}
    </div>
  );
}

export default App;
