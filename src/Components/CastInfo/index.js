import React, {useState,useEffect} from 'react';
import axios from "axios";


const CastInfo = ({ apiKey, actorName, currentCastID ,profilePath}) => {

    const[ castInfo, setCastInfo] = useState([])


    useEffect( () => {
        actorName && axios.get(`https://api.themoviedb.org/3/person/${currentCastID}?api_key=${apiKey}`)
            .then((response) => {
                setCastInfo(response.data)
            }, (error) => {
                console.log(error);
            })
    },[])

     const image_API = 'https://image.tmdb.org/t/p/w200';

    console.log('THIS IS CASTS INFO /////',castInfo && castInfo)
    console.log('//////', actorName)

    return(
        <div>
            {actorName}
            {profilePath ?  <img src={`${image_API}${profilePath}`} alt={'title'}  /> : <div>No image</div>}
        </div>
    )
}

export default CastInfo