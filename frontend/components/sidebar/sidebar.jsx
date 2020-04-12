import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {


        return (
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    <img className="plana-logo" src={window.planaLogo} />
                    <Link className="sidebar-logo-text" to="/home" >plana</Link>
                </div>
                <div className="sidebar-links">
                    <Link className="sidebar-link" to="/home">
                        <i className="fas fa-home"></i>
                        <div>Home</div>
                    </Link>
                    <Link className="sidebar-link"to="/tasks">
                        <i class="fas fa-check-circle"></i>
                        <div>My Tasks</div>
                    </Link>
                </div>  
            </div>
        )
    }
}

export default Sidebar;