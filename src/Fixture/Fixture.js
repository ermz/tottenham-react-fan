import React from 'react';
import './Fixture.css';

const fixture = (props) => {
    return (
        <div className="Fixture">
            <p onClick={props.click}>The game is against {props.team} and they have {props.points} points.</p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed} value={props.team}/>
        </div>
        )
};

export default fixture;