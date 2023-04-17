import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import TaskPage from "../pages/TaskPage";
import Tasks from '../pages/Tasks'
import Pupils from "../pages/Pupils";
import ResetPassword from "../pages/ResetPassword";
import ChangePassword from "../pages/ChangePassword";
import Main from "../pages/Main";
import Conference from "../pages/Conference";


export const privateRoutes = [
    {path: '/about', component: <About />, exact: true},
    {path: '/contacts', component: <Contacts />, exact: true},
    {path: '/tasks', component: <Tasks />, exact: true},
    {path: '/tasks/:id', component: <TaskPage/>, exact: true},
    {path: '/conference', component: <Conference />, exact: true},
    {path: '/pupils', component: <Pupils />, exact: true},
]

export const publicRoutes = [
    {path: '/', component: <Main />, exact: true},
    {path: '/login', component: <Login />, exact: true},
    {path: '/about', component: <About />, exact: true},
    {path: '/contacts', component: <Contacts />, exact: true},
    {path: '/user-forgot-password', component: <ResetPassword />, exact: true},
    {path: '/user-change-password/:id', component: <ChangePassword />, exact: true},
]