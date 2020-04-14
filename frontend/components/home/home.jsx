import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: ""
        }
    
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }


    handleClick(e) {
        e.preventDefault()
        this.setState({toggle: 'dropdown-show'})
    }

    handleBlur() {
        this.setState({toggle: ''})
    }

    render() {
    const { logout } = this.props
        return (
            <div className="home-container">
                <div className="home-header">
                    <div className="menu-bar">
                        <div className={`dropdown-button ${this.state.toggle}`} >
                           
                            <div className="dropdown-menu">
                                <div className="create-workspace">Create New Workspace</div>
                                <div className="edit-workspace">Edit Workspace</div>
                                <Link className="logout-btn" to="/" onMouseDown={logout}>Log Out</Link>
                            </div>
                        </div>
                        <button onClick={this.handleClick} onBlur={this.handleBlur}>
                            hello
                            <i className="fas fa-chevron-circle-down fa-lg"></i>
                        </button>
                        {/* <button className="openbtn" onClick={() => openNav()}>☰ Open Sidebar</button>   */}
                        
                    </div>

                    <div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
