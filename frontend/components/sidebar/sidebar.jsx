import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        
        let initials = this.props.currentUser ? this.props.currentUser.name.split(' ').map(word => (word[0].toUpperCase())).join('') : ""

        return (
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    <img className="plana-logo" src={window.planaLogo2} />
                    <Link className="sidebar-logo-text" to="/home" >plana</Link>
                </div>
                <div className="sidebar-links">
                    <Link className="sidebar-link" to="/home">
                        <i className="fas fa-home"></i>
                        <div>Home</div>
                    </Link>
                    <Link className="sidebar-link"to="/tasks">
                        <i className="fas fa-check-circle"></i>
                        <div>My Tasks</div>
                    </Link>
                    <a href="https://github.com/michaelyuen89" className="sidebar-link">
                        <i className="fab fa-github"></i>
                        <div>Github</div>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-yuen-a7248894/" className="sidebar-link">
                        <i className="fab fa-linkedin"></i>
                        <div>Linked In</div>
                    </a>
                    <a href="" className="sidebar-link">
                        <i className="fab fa-angellist"></i>
                        <div>Angel List</div>
                    </a>
                </div>

                <div className="sidebar-favorites">

                    <div className="sidebar-favorite">Favorites</div>
                    <div className="sidebar-favorited">Favorite projects by clicking the <i className="far fa-star"></i></div>
                </div>

                <div className="sidebar-workspace">
                    <div className="sidebar-workspace-name-container">
                        <div className="sidebar-workspace-name">Workspaces</div>
                    </div>
                    <div className="sidebar-team-members">
                        <div className="sidebar-initials">{initials}</div>
                        <div className="sidebar-initials-empty"></div>
                        <div className="sidebar-initials-empty"></div>
                    </div>
                </div>

                <div className="sidebar-invite">
                    <img className="sidebar-invite-img" src={window.invite_peeps}/>
                    <div className="sidebar-invite-text">Invite your team and start collaborating!</div>
                    <button className="sidebar-invite-button">Invite to Plana</button>
                </div>
            </div>
        )
    }
}

export default Sidebar;