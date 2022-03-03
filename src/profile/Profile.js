import React from 'react'
import PropTypes from "prop-types";

function Profile(props) {
  
    return (
        <div>
            <div> {props.children} </div>
            <div>
                <p> Full Name: {props.fullName} </p>
            </div>
            <div>
                <p> Bio: {props.bio} </p> 
            </div>
            <div>
                <p> Profession: {props.profession} </p>
            </div>
            
            <button onClick={() => props.alertInput(`Welcome ${props.fullName}`)}>CLICK HERE</button>

        </div>
    )
}

Profile.defaultProps = {
    fullName: 'Full Name?',
    bio: 'Basic information?',
    profession: 'Profession?'
}

Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
   };

export default Profile
