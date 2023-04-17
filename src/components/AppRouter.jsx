import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../Router/routes';
import { AuthContext} from '../context';
import Loader from './UI/Loader/Loader';
import NavbarPanel from './UI/Navbar/NavbarPanel';
import { UserContext } from '../context/userContext';


const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
      return <Loader />
  }
  if (!isAuth) {
    return (
      <>
      <NavbarPanel />
      <Routes>
         {publicRoutes.map(route => 
            <Route exact
            element={route.component } 
            path={route.path}
            key={route.path}
            />
        )}
         {/* <Route  path = "/login" element={<Login />} key ='/login' /> */}
        {<Route path="*" element={<Navigate to ="/" />}/> }
    </Routes>
    </>
     )
  } else {

  return (
    <>
    <NavbarPanel />
    <Routes>  
        {privateRoutes.map(route => 
            <Route exact
            element={route.component } 
            path={route.path}
            key={route.path}
            />
        )}
        {<Route path="/login" element={<Navigate to ="/tasks" />}/> }
    </Routes>
  
    </>
  )
  }
}

export default AppRouter
