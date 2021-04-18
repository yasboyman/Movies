import React, {useState, useEffect} from 'react';
import axios from "axios";
import './CastInfo.css'


const CastInfo = ({apiKey, actorName, currentCastID, profilePath}) => {

    const [castInfo, setCastInfo] = useState([])

    // fetches detailed cast info based on ID, id used from props sent via Character Component

    useEffect(() => {
        actorName && axios.get(`https://api.themoviedb.org/3/person/${currentCastID}?api_key=${apiKey}`)
            .then((response) => {
                setCastInfo(response.data)
            }, (error) => {
                console.log(error);
            })
    }, [])

    const image_API = 'https://image.tmdb.org/t/p/w200';
    const handleIMBClick = () => {
        castInfo.imdb_id && window.open(`https://www.imdb.com/name/${castInfo.imdb_id}`)    // sends us back to Popular page
    }
    return (
        <div className='actor_container'>
            <h2>{actorName}</h2>
            {profilePath ? <img src={`${image_API}${profilePath}`} alt={'title'}/> : <div>No image</div>}
            {castInfo.birthday && <h5>  {castInfo.birthday}</h5>}
            {castInfo.place_of_birth && <h5>  {castInfo.place_of_birth}</h5>}
            {castInfo.biography && <h5 className='cast_biography'>  {castInfo.biography}</h5>}
            <h5 style={{color: 'lightblue'}} onClick={handleIMBClick}> Link to IMDB</h5>

        </div>
    )
}

export default CastInfo