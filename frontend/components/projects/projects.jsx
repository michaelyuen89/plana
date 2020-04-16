import React from 'react';
import { Link } from 'react-router-dom';


class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        return (



            <div className="project-container">
                <div className="project-header">Recent Projects</div>
                <div className="project-container-content">
                    <div className="project-tile-container">
                        <a href="#/projects/new" className="project-tile-outer">
                            <div className="project-tile-structure">
                                <div className="project-tile-inner">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                            <div className="project-name">New Project</div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;