import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Projects from '../projects/projects_container';


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

    let initials = this.props.currentUser.name.split(' ').map(word => (word[0].toUpperCase())).join('')

        return (
            <div className="home-container">
                <div className="home-header">
                    <div>
                        <Sidebar />
                    </div>
                    <div className="home-inner-container">
                        <div className="menu-bar">
                            <div className={`dropdown-menu ${this.state.toggle}`} >
                            
                                <div className="dropdown-item">
                                    <div className="create-workspace">Create New Workspace</div>
                                    <div className="edit-workspace">Edit Workspace</div>
                                    <Link className="logout-btn" to="/" onMouseDown={logout}>Log Out</Link>
                                </div>
                            </div>
                            <div className="dropdown-button">
                                <button onClick={this.handleClick} onBlur={this.handleBlur}>
                                    {initials}
                                    {/* // <i className="fas fa-chevron-circle-down fa-lg"></i> */}
                                </button>
                            </div> 
                        </div>
                        <div>
                            <Projects />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
