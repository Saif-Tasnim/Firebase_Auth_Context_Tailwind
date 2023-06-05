import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2> This is Home Page </h2>
            <h2> This User is : <span> {user && {user}} </span>  </h2>
           
        </div>
    );
};

export default Home;