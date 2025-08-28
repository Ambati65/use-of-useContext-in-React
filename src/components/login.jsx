import React, { useState,useContext } from 'react';
import userContext from '../context/UseContext';


function login(props) {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {setUser}=useContext(userContext);
    const onSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type='text' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={onSubmit}>Login</button>
        </div>
    );
}

export default login;