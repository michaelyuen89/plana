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
                    <img className="plana-logo" src={window.planaLogo2} />
                    <Link className="sidebar-logo-text" to="/home" >plana</Link>
                    {/* <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>×</a> */}
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
                </div>

                <div className="sidebar-favorites">

                    <div className="sidebar-favorite">Favorites</div>
                    <div className="sidebar-favorited">Favorite projects by clicking the <i className="far fa-star"></i></div>
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