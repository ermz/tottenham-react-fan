import React from 'react';

const fixture = (props) => {
    return (
        <div>
            <p>The game is against {props.team} and they have {props.points} points.</p>
            <p>{props.children}</p>
        </div>
        )
};

export default fixture;