import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const { logout } = this.props
        return (
            <>
                <div className="home-header">
                    <div className="menu-bar">
                        <div className="logo-nav">
                            
                        </div>
                        <Link className="logout-btn" to="/" onClick={logout}>Log Out</Link>
                    </div>

                    <div>
                        <Sidebar />
                    </div>
                </div>
            </>
        );
    }
};

export default Home;
