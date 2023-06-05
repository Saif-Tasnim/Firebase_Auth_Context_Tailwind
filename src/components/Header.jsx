import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <Link className="btn btn-ghost normal-case text-xl" to="/"> My Site</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">LogIn</Link>
        </div>
    );
};

export default Header;