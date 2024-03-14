import React from 'react';

const Watch = ({ watch }) => {
    const { name, price } = watch;
    console.log(watch)
    return (
        <div>
            <h3>Watch Brand: {name}</h3>
            <p>Watch Price: {price}</p>
        </div>
    );
};

export default Watch;