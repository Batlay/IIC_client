import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../UI/Button/MyButton';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const TaskItem = ({task}) => {
  const router = useNavigate();
  const [t, i18n] = useTranslation('global')

    return (
     
    <div className='App'>
      <div className="card">
        <div className="card__header">
          <img src="https://slidemodel.com/wp-content/uploads/21511-04-transparent-materials-powerpoint-backgrounds-16x9-1.jpg" style={{backgroundSize: 'auto'}} alt="card__image" className="card__image" width="600" />
        </div>
        <div className="card__body">

        <h4>{task.title}</h4>
        <p>{task.content.substring(0, 280)}...</p>
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
          <center>
          <MyButton data-testid='see_btn' style={{float: 'right'}} onClick={() => router(`/tasks/${task.created_on}`, {replace: true})}>
              {t("task.button")}
            </MyButton>
            </center>
        </div>
      </div>
    </div>
  <br></br>
  </div>
    )
}


export default TaskItem
