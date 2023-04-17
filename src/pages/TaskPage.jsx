import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyButton from '../components/UI/Button/MyButton';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




const TaskPage = () => {
    const router = useNavigate();
    const [t, i18n] = useTranslation('global')
    const params = useParams()

    const [task, setTask] = useState('')

    useEffect(() => {
        getTask()
    }, [])

    const getTask = async () => {
        const response = await fetch(`/api/tasks/${params.id}`)
        const data = await response.json()
        setTask(data)
    }

    return (
      <div className='App'>
      <div className="card">
        <div className="card__header">
          <img src="https://slidemodel.com/wp-content/uploads/21511-04-transparent-materials-powerpoint-backgrounds-16x9-1.jpg" style={{backgroundSize: 'auto'}} alt="card__image" className="card__image" width="600" />
        </div>
        <div className="card__body">

        <h4>{task.title}</h4>
        <p>{task.content}...</p>
        <a href={task.link} target="_blank" rel="noreferrer">
            {task.link}
      </a>
      </div>
      <div className="card__footer">
        <div className="user">
          <div className="user__info">
          <span>{task.author}</span>
          <br/>
            <small>{task.created_on}</small>
          </div>
          <br/>
        </div>
      </div>
    </div>
  <br></br>
  </div>
    )
}

export default TaskPage