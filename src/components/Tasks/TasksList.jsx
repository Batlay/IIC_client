import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import TaskItem from './TaskItem'


const TasksList = ({tasks}) => {

    if (!tasks.length) {
        return (
            <center>
          <h4 style={{textAlign: 'center'}}>
                    Tasks not found
              </h4>
              </center>
        )
      }
    
    return (
        <div>
            {tasks.map((task, index) => (
                <TaskItem  key={index} task={task} />
            ))}
        </div>
    )
}

export default TasksList
