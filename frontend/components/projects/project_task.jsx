import React from 'react'

class ProjectTask extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {

        return (
            <div className="task--index--container">
                <div className="task--index--header">
                    <button className="add-task-button fas fa-plus"> Add Task</button>
                </div>
                <div className="task--index--content">

                </div>

                <div className="task--index--footer">

                </div>
            </div>
        )
    }
}

export default ProjectTask;