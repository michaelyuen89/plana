import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';


class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { logout } = this.props
        return (
            <div className="home-container">
                <div className="home-header">
                    <div className="menu-bar">
                        <div className="logo-nav">

                        </div>
                        {/* <button className="openbtn" onClick={() => openNav()}>☰ Open Sidebar</button>   */}
                        <Link className="logout-btn" to="/" onClick={logout}>Log Out</Link>
                    </div>

                    <div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        );
    }
};

export default Tasks;
