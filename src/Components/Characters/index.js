import React from 'react';
import './characters.css';
import CastInfo from "../CastInfo";

const Characters = ({cast, apiKey}) => {


    if (!cast) return null;
    const cuttingArray = cast.cast && cast.cast.slice(0, 6)          // slices cast data

    return (
        <div className='characters_container'>
            {cast.cast && cuttingArray.map(actor => {                  // maps cast data and sends info to CastInfo component via props
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