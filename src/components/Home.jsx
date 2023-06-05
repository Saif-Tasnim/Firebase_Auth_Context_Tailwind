import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <h2> This is Home Page </h2>
            <h2> This User is : {user.displayName} </h2>
            <h2> This User Phone  : {user.phoneNo} </h2>
        </div>
    );
};

export default Home;