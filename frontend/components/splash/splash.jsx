import React from 'react';
import { Link, withRouter, Redirect, NavLink } from 'react-router-dom';
import NavBarContainer from '../nav/nav_container'


class Splash extends React.Component {


    render() {
        return (
            <div className="landing">
                <div className="splash-body">
                    <NavBarContainer />
                    <h1 className="heading typewriter">Keep your team organized and connected</h1>
                    <p className="subheading">With Plana’s work management platform, your team can stay focused on their goals, projects, and tasks—no matter when or where they work.</p>
                    <Link className="signup-btn-splash" to="/signup">Try for free</Link>
                    <div className='video-box'>
                        <video className="video-tag" autoPlay loop muted>
                            <source src={asanaVideo} type='video/mp4' />
                        </video>
                    </div>
                    {/* uncomment iframe here and in splash.jsx */}
                    {/* <iframe
                        width="560"
                        height="700"
                        src="https://www.youtube.com/embed/8vy0lhXFfIg" 
                        frameBorder="0"
                        autoPlay
                        allowFullScreen
                        title="slackvideo"
                        className="slackvid"
                    /> */}
                    <div className="splash-reviews">
                        <div className="reviews-text">
                            <h1>Teams love Plana, but don’t take our word for it</h1> 
                            <p className="subheading">Read over 100,000,000 reviews from real customers about how Plana fuels their business success.</p>
                            <a className="review-link" href="">Read Reviews</a>
                        </div>
                        <div className="review-img" >
                            <img src={window.planaReview} />
                        </div>
                    </div>
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
