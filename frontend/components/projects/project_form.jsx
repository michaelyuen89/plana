import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project
        // this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.createProjectLink = this.createProjectLink.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value,
        });
        // debugger
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const project = Object.assign({}, this.state);
        this.props.createProject(project);
    };


    createProjectLink() {
        this.props.createProject(this.state).then((res) => {
            this.props.history.push(`/projects/${res.project.id}`)
        });
    }


    render() {

        return (
            <div className="project-form-container">
                <div className="back-button">
                    <Link to="/home">
                        <i className="back-button far fa-arrow-alt-circle-left fa-2x"></i>
                    </Link>
                </div>
                <div className="formContainer">
                    <div className="formTitle">Create a New Project</div>
                    <div className="formSubContainer">
                        <form onSubmit={this.handleSubmit} className="form">
                            <div className="form-table">
                                <div className="project-name-field">
                                    <label className="form-label">Project Name</label>
                                    <input className="generic-input form-field" type="text" required onChange={this.update("name")} />
                                </div>
                                <div className="project-description-field">
                                    <label className="form-label">Project Description</label>
                                    <input className="generic-input form-field" type="text" onChange={this.update("description")} />
                                </div>
                            </div>
                            <div>
                                <div colSpan="2" className="spacer"></div>
                            </div>
                            <div className="modal-button">
                                <div>
                                    <input type="submit" value="Create Project" onClick={this.createProjectLink} className="create-button" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(ProjectForm);