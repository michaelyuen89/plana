import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
import HomeNavContainer from '../nav/home_nav_container';
import ProjectTask from '../projects/project_task';


class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { logout } = this.props
        return (
            <div className="task-container">
                <HomeNavContainer/>
                <SidebarContainer />
                <div className="task-component-container">
                    <ProjectTask />
                </div>
            </div>
        );
    }
};

export default Tasks;


