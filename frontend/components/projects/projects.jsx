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
        const { projects } = this.props;
        if (projects[projects.length - 1] === undefined) return null;

        const projectEls = projects.map(project => {
          if (project) {
            return (
              <div key={project.id} className="project-tile-container">
                <a href={`#/projects/${project.id}`} className="project-tile-outer">
                  <div className="project-tile-structure">
                    <div className="project-tile-inner-created">
                    </div>
                  </div>
                  <div className="project-name">{project.name}</div>
                </a>
              </div>
            );
          }
        });

        return (



            <div className="project-container">
                {/* <div className="project-flexer"> */}
                <div className="project-favorites">Favorites</div>
                <div className="project-header">Recent Projects</div>
                    <div className="project-container-content">
                        <div className="project-tile-container">
                            <a href="#/projects/new" className="project-tile-outer">
                                <div className="project-tile-structure">
                                    <div className="project-tile-inner-new">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                </div>
                                <div className="project-name">New Project</div>
                            </a>
                        </div>
                        {projectEls}
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

export default Projects;