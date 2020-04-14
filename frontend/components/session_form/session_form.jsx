import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };
        this.errors = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.removeErrors(this.props.errors)
    }

    update(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (e.currentTarget.value === "Demo User") {
            const demoUser = {
                email: "june@gmail.com",
                password: "password"
            }

        this.props.processForm(demoUser)
        } else {
            const user = Object.assign({}, this.state);
            this.props.processForm(user);
        }

    }


    render() {
        if (this.props.formType === "login") {
            return (
                <div className="signup">
                    <div className="logo-header">
                        <img className="logo-session" src={window.planaLogo2} />
                        <Link className="logo" to="/" >plana</Link>
                    </div>
                    <div className="outer-box">
                        <div className="login-box">
                            <header className="login-header">Log In</header>
                                
                            <form>
                                {/* onSubmit={this.handleSubmit} */}
                            <label className="label-text">Email Address
                            <input className="login-input" type="text" value={this.state.email} onChange={this.update("email")} />
                            </label>
                            <label className="label-text">Password
                                <input className="login-input" type="password" value={this.state.password} onChange={this.update("password")} />
                            </label>

                            <ul className="login-box-errors">
                                {this.props.errors.map((error, i) => <li className="login-error" key={i}>{error}</li>)}
                            </ul>

                                <input type="submit" onClick={this.handleSubmit} className="login-btn" value="Log In"/>
                                <div className="form-option">or</div>
                                <input type="submit" onClick={this.handleSubmit} className="demo" value="Demo User"/>
                            </form>

                        </div>
                            <div className="login-session">
                                <p className="new-account">Don't have an account?  </p>
                                <Link className="signup-btn-text" to="/signup" >Sign Up</Link>
                            </div>
                    </div>
                </div>
            )
        }

        if (this.props.formType === "signup") {
            return (
                <div className="signup">  
                    <div className="logo-header">
                        <img className="logo-session" src={window.planaLogo2} />
                        <Link className="logo" to="/" >plana</Link>
                    </div>
                    <div className="outer-box">
                        <div className="signup-box">
                            <header className="signup-header">Sign Up</header>
                
                            <form onSubmit={this.handleSubmit}>
                            <label className="label-text">Name
                                <input className="signup-input" type="text" value={this.state.name} onChange={this.update("name")} />
                            </label>
                            <label className="label-text">Email Address
                                <input className="signup-input" type="email" value={this.state.email} onChange={this.update("email")} />
                            </label>
                            <label className="label-text">Password
                                <input className="signup-input" type="password" value={this.state.password} onChange={this.update("password")} />
                            </label>

                            <ul className="signup-box-errors">
                                {this.props.errors.map((error, i) => <li className="sign-error" key={i}>{error}</li>)}
                            </ul>

                        
                                <input type="submit" className="signup-btn" value="Sign Up" />
                            </form>
                        </div>

                        <div className="signup-session">
                            <p className="new-account">Already have an account?  </p>
                            <Link className="login-btn-text" to="/login">Log In</Link>
                        </div>
                        
                    </div>
                </div>
            )
        }

        return (
            <Link to="/"></Link>
        )
    }
    
}

export default SessionForm;


