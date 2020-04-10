import React from 'react';
import { Link } from 'react-router-dom';


const NavBarComponent = () => {

    return (
        <>
            <div className="nav-header">
            
                <div className="menu-bar">
                    <div className="logo-nav">
                        <img className="plana-logo" src={window.planaLogo}/>
                        <h4 className="plana">plana</h4>
                    </div>
                    <Link className="login-link" to="/login">Log In</Link>
                    <Link className="signup-btn-nav" to="/signup">Try for free</Link>
                </div>
            </div>
        </>
    );
};
export default NavBarComponent;