import React, {useState, useEffect} from 'react'
import TasksList from '../components/Tasks/TasksList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


const Conference = () => {
        const [tasks, setTasks] = useState([])
        const userData = JSON.parse(localStorage.getItem('user'))

        useEffect(() => {
            getTasks()
        }, [])
        
        const getTasks = async () => {
            const response = await axios.post('/api/tasks/', userData )
            setTasks(response.data)
        }

        return (
            <div className='conference_page'>
            <h1>Ближайшая видео конференция:</h1>
            <h2>Google Meet</h2>
            <div className="image">
                <img src='https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png'/>
            </div>
            <p>
               16-04-2023
            </p>
            <a href='https://meet.google.com/' target="_blank" rel="noreferrer">
            https://meet.google.com/
      </a>
            {/* <button>Get in Touch</button> */}
        </div>
        )
}


export default Conference
