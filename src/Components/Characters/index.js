import React,{useState,} from 'react';
import './characters.css';
import CastInfo from "../CastInfo";

const Characters = ({cast, apiKey}) => {

    const [currentCastInfo, setCurrentCastInfo]= useState('')

    if (!cast) return null;


    const cuttingArray = cast.cast && cast.cast.slice(0,6)
    console.log('characters', cast && cast)

    return (
        <div className='characters_container'>
            {cast.cast && cuttingArray.map( actor => {
                // setCurrentCastInfo(actor.id)
                return ( <div className='character_info'>
                       <CastInfo
                       // cast={{...cast}}
                       actorName={actor.name}
                       actorID={actor.id}
                       apiKey={apiKey}
                       currentCastID={actor.id}
                       profilePath={actor.profile_path}
                       />
                    </div>
                )
            })

            }

        </div>
    )
}

export default Characters




// import axios from "axios";
// import CastInfo from "../CastInfo";

// const Characters = ({cast, apiKey}) => {
//
//
//
//     const [castInfo, setCastInfo]= useState([])
//
//     useEffect( () => {
//         cast.cast && axios.get(`https://api.themoviedb.org/3/person?api_key=${apiKey}`)
//             .then((response) => {
//                 setCastInfo(response.data)
//             }, (error) => {
//                 console.log(error);
//             })
//     },[cast])
//
//     if (!cast) return null;
//
//
//     const image_API = 'https://image.tmdb.org/t/p/w200'
//
//     console.log('castIIIIIIINFO', castInfo)
//     //
//     //
//     const cuttingArray = cast.cast && cast.cast.slice(0,6)
//     console.log('characters', cast && cast)
//
//     return (
//         <div className='characters_container'>
//             {cast.cast && cuttingArray.map( actor => {
//                 return ( <div className='character_info'>
//
//                         {actor.profile_path ?  <img src={`${image_API}${actor.profile_path}`} alt={'title'}  /> : <div>No image</div>}
//                         <h3>{actor.name} </h3>
//                         <p>Age:{actor.age}</p>
//                         {setCastInfo(actor.id) : null}
//
//
//                     </div>
//                 )
//             })
//
//             }
//
//         </div>
//     )
// }
//
// export default Characters