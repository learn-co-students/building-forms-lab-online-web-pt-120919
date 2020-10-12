import React from 'react';

const Bands = ({bands}) => {
    return (
        <div>
            {bands.map((band, index) => (
                <li key={index}>
                    {band.name}
                </li>    
            ))}
        </div>
    );
};

export default Bands;