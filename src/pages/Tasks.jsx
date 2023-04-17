import React, {useState, useEffect} from 'react'
import TasksList from '../components/Tasks/TasksList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


const Tasks = () => {
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
            <Container>
                <Row>
                    <Col md={7}>
                     
                        <TasksList tasks={tasks} />
                    </Col>
                    <Col md={5}>
                       
                    </Col>
                </Row>
            </Container>
        )
}


export default Tasks
