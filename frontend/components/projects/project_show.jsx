import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import HomeNavContainer from '../nav/home_nav_container';
import ProjectTask from '../projects/project_task'



class ProjectShow extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = this.props.currentProject

    }
    
    componentDidMount() {
        this.props.fetchProject(this.props.projectId);
        // this.setState()
    }

    render() {
        
       const { currentProject } = this.props;
       if (!currentProject) {
           return null;
       }
        return (
            <div>
                <SidebarContainer />
                    <div className="project-show-container">
                        <HomeNavContainer />        
                        <div className="project-show-outer-container">
                            <div className="project-name-show">
                                <h1>{currentProject.name}</h1>
                            </div>

                            <ProjectTask />
                        </div>
                    </div>
            </div>
        )
    }
}


export default ProjectShow;