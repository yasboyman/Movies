import React, {useState,} from 'react';
import './characters.css';
import CastInfo from "../CastInfo";

const Characters = ({cast, apiKey}) => {

    const [currentCastInfo, setCurrentCastInfo] = useState('')

    if (!cast) return null;

    const cuttingArray = cast.cast && cast.cast.slice(0, 6)

    return (
        <div className='characters_container'>
            {cast.cast && cuttingArray.map(actor => {
                return (<div className='character_info'>
                        <CastInfo
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