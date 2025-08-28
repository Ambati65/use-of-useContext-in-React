import React from 'react';
import UserContext from './UseContext';

function UseContext({children}) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UseContext;