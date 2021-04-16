import React,{useState,useEffect} from 'react';
import axios from "axios";


const Characters = ({movieId, apiKey}) => {

    const [cast, setCast] = useState([])

    useEffect( () => {

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
            .then((response) => {
                setCast(response.data)
            }, (error) => {
                console.log(error);
            })
    },[])


    console.log('/////////////////',cast);
    return (
        <div>

        </div>
    )
}

export default Characters