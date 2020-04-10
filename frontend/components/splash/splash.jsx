import React from 'react';
import { Link, withRouter, Redirect, NavLink } from 'react-router-dom';
import NavBarContainer from '../nav/nav_container'


class Splash extends React.Component {


    render() {
        return (
            <div className="landing">
                <div className="splash-body">
                    <NavBarContainer />
                    <h1 className="heading">Keep your team organized and connected</h1>
                    <p className="subheading">With Plana’s work management platform, your team can stay focused on their goals, projects, and tasks—no matter when or where they work.</p>
                    <Link className="signup-btn-splash" to="/signup">Try for free</Link>
                    <video className='video-tag' autoPlay loop muted>
                        <source src={asanaVideo} type='video/mp4' />
                    </video>
                </div>

                <div className="splash-footer">
                    <a className="footer-link" href="https://github.com/michaelyuen89">Github</a>
                    <a className="footer-link" href="https://www.linkedin.com/in/michael-yuen-a7248894/">Linked In</a>
                    <a className="footer-link" href="https://angel.co/u/michael-yuen-4">Angel List</a>
                </div>
            </div>
        )
    }
}

export default Splash;