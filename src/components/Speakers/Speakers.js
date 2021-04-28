import React from 'react'; 
import withData from '../Speakers/withData'

const Speakers = ({speakers}) => {
    return(
        <div>
            {speakers.map(({imageSrc, name}) => {
            return <img 
                src={`/images/${imageSrc}.png`} 
                alt={name}
                key={imageSrc}></img>;    
            })}   
        </div>
    );
};

export default withData(Speakers);
