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
                <h4 className="sidebar-logo-text">plana</h4>
                </div>
                <div className="sidebar-items">
                    <Link className="sidebar-home"to="/home">Home</Link>
                    <Link className="sidebar-tasks"to="/tasks">My Tasks</Link>
                </div>  
            </div>
        )
    }
}

export default Sidebar;