import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return(
        <div>
            <p className="outputOne">
                Hello I'm the first paragraph made by {props.username}
            </p>
            <p className="outputTwo">
                Bye I'm the second paragraph made by {props.username}
            </p>
        </div>
    )
}

export default UserOutput;