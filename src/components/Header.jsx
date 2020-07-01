import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/Logo.png';
import userIcon from '../assets/static/sonajero.png';
import {connect} from 'react-redux';
import gravatar from '../utils/gravatar.js';
import {logoutRequest} from '../actions';
import PropTypes from 'prop-types';

const Header = props => {

  const {user} = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () =>{
    props.logoutRequest({})

  }
  
  Header.propTypes = {
    user: PropTypes.object,
    logoutRequest: PropTypes.func,
  }

  return(
    <header className="header">
      
      <Link to='/'>
        <img className="header__img" src={logo} alt="Logo La Casita de Magy" />

      </Link>
      
      
      <ul id="button" className="buttons">
        <li><a href="/">Inicio</a></li>
        <li><a href="/info">Sobre nosotros</a></li>
        <li><a href="/servicios">Servicios</a></li>
        <li><a href="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=8807">Pagos</a></li>
        <li><a href="/info">Contacto</a></li>
      </ul>
      
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            (<img src={gravatar(user.email)} alt={user.email}/>):
            (<img src={userIcon} alt="Perfil" />)
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
              <li><a href="/">{user.name}</a></li>:
              null
          }
          {hasUser ?
            <li><a href="/logout" onClick = {handleLogout}>Cerrar Sesión</a></li>:
            <li><a href="/login">Iniciar Sesión</a></li>
          }
        </ul>
      </div>
      
    </header>
    
  );
}
const mapStateToProps = state => {
  return{
    user: state.user
  };
};

const mapDistpatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps,mapDistpatchToProps)(Header);
