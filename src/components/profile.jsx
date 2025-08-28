import React,{useContext} from 'react';
import userContext from '../context/UseContext';

function profile(props) {
    const { user } = useContext(userContext);


    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }


    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    );
}

export default profile;