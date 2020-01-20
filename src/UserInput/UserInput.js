import React from 'react';

const UserInput = (props) => {
    return(
        <input type="text" onChange={props.newname} placeholder="ERMZ"></input>
    )
}

export default UserInput;