import React, { useContext, useState } from 'react'
import MyInput from '../components/UI/Input/MyInput'
import { AuthContext } from '../context'
import axios from 'axios'
import { UserContext } from '../context/userContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [user, setUser] = useState({username: '', password: ''})
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const {value, setValue} = useContext(UserContext)
  const [t, i18n] = useTranslation('global')

  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  axios.defaults.xsrfCookieName = 'csrftoken';

    const login = (event) => {
        event.preventDefault()
     
        axios.post('/api/login/', user)
        .then(response =>  {
           const data = response.data
           setIsAuth(true)
           setValue(data)
           localStorage.setItem('auth', 'true')
           localStorage.setItem('user', JSON.stringify(data))
           
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            toast.error(t("notify.message1"))
          }
        });
    }

  return (
      // <div className='login' style={{backgroundImage:`http://localhost:8000/static/login_form.png`}}>
        
          <div className='login'>
        <div className='login_form'>
            <div className="row h-100">
            <div className=" row justify-content-center">
                    <div className="col-md-3 col-10" >
                    <center>
                      <h6> {t("login.h1")}</h6>
                      <h6> {t("login.h2")}</h6>
                    </center>

                    <form onSubmit={login} aria-label="form">
                        <MyInput 
                          value={user.username}
                        type='text' placeholder={t("login.input1")}
                          onChange={e => setUser({...user, username: e.target.value})}
                          required
                        />
                        <MyInput 
                        value={user.password}
                        type='password' placeholder={t("login.input2")}
                          onChange={e => setUser({...user, password: e.target.value})}
                          required
                        />
                        <center>
                        {/* <MyButton style={{backgroundColor: '#009688', border: '0.2px solid grey', color: 'white', borderRadius: '12px'}}>Enter</MyButton> */}
                        <button>{t("login.button")}</button>
                        </center>
                    </form>   
        {/* <MyButton data-testid='forgot' onClick={() => router(`/user-forgot-password`, {replace: true})}>
            Забыли Пароль?
            </MyButton> */}
            <center>
            <div className="row justify-content-center my-2"> 
              <a href="/user-forgot-password" >
                <small className="text-muted">{t("login.link")}</small>
              </a> 
            </div>
            </center>
   </div>
   </div>
  </div>
  </div>
  <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>
    </div>
  )
}

export default Login
