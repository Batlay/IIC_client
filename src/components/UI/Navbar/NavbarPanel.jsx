import React, { useContext } from 'react'
import { AuthContext } from '../../../context';
import MyButton from '../Button/MyButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const NavbarPanel = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const {value, setValue} = useContext(UserContext)
  const [t, i18n] = useTranslation('global')
  // console.log(value)
  const navigate = useNavigate();
  const logout =() => {
      setIsAuth(false)
      setValue(null)
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
      navigate("/login");
  }

  const handleChangeLanguage = (lang) => {
      i18n.changeLanguage(lang)
  }

    return (
      <Navbar className="color-nav"collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand style={{color: 'white'}}>IIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
      
        {  isAuth 
        ?
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        
            <Link className='navb' to="/tasks">{t("navbar.tasks")}</Link>
            <Link className='navb' to="/conference">{t("navbar.video")}</Link> 
            <Link className='navb' to="/about">{t("navbar.about")}</Link>
            <Link className='navb' to="/contacts">{t("navbar.contacts")}</Link>
            
        </Nav>
        <Nav>
          <button onClick={() => handleChangeLanguage("en")} style={{
            backgroundSize: 'cover', 
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png")',
            height: '20px',
            padding: '5px 15px',
            margin: '20px 0px'
            }}></button>
          <button onClick={() => handleChangeLanguage("ru")}  style={{
            backgroundSize: 'cover', 
            backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAJFBMVEX///8aNnjlFx3lFxvlGBj///sNLHIXNnooMW/OHSPnFxbnFhuiej8wAAABKElEQVR4nO3bOQ4CQQwAwWGXm///lysApiVSCKpeYLWdegwAAAAAAAAAAAAAAAAAAADgqx2zX6/kL+2ZjQOzsWGmSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJuUPvcaR2TgxG5eb7Zk3Y1mWdV23vGhSzya/nuK/3JvcD4UXTUqT0qQ0qUcTPmhSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmtQVoX//e54EkrIAAAAASUVORK5CYII=")',
            height: '20px',
            padding: '5px 15px',
            margin: '20px 3px'}}></button>
              <MyButton style={{color: 'white', border: '1px solid white'}} onClick={logout}>{t("navbar.button2")}</MyButton>
          </Nav>
        </Navbar.Collapse>
        :
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Link className='navb' to="/">{t("navbar.main")}</Link>
            <Link className='navb' to="/about">{t("navbar.about")}</Link>
            <Link className='navb' to="/contacts">{t("navbar.contacts")}</Link>
        
        </Nav>
        <Nav>
          <button onClick={() => handleChangeLanguage("en")} style={{
            backgroundSize: 'cover', 
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png")',
            height: '20px',
            padding: '5px 15px',
            margin: '20px 0px'
            }}></button>
          <button onClick={() => handleChangeLanguage("ru")}  style={{
            backgroundSize: 'cover', 
            backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAJFBMVEX///8aNnjlFx3lFxvlGBj///sNLHIXNnooMW/OHSPnFxbnFhuiej8wAAABKElEQVR4nO3bOQ4CQQwAwWGXm///lysApiVSCKpeYLWdegwAAAAAAAAAAAAAAAAAAADgqx2zX6/kL+2ZjQOzsWGmSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJuUPvcaR2TgxG5eb7Zk3Y1mWdV23vGhSzya/nuK/3JvcD4UXTUqT0qQ0qUcTPmhSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmtQVoX//e54EkrIAAAAASUVORK5CYII=")',
            height: '20px',
            padding: '5px 15px',
            margin: '20px 3px'}}></button>
              <MyButton style={{color: 'white', border: '1px solid white'}} onClick={logout}>{t("navbar.button")}</MyButton>
          </Nav>
        </Navbar.Collapse>
      }
        
  
      </Container>
    </Navbar>
  )
}

export default NavbarPanel
