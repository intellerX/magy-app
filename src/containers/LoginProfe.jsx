import React, { useState } from 'react';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { loginRequest } from '../actions';
import twitterIcon from '../assets/static/twitter-icon.png';
import googleIcon from '../assets/static/google-icon.png';

const LoginProfe = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,

    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {

      axios.get('https://bookbasket1.herokuapp.com/api/books/', {
      }).then((response) => {
        console.log(response.data);
        window.location.href = '/inicio';

      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión como Profe</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />

            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button type='submit' className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>          
          <Link to='/login'>
            Entrar como Estudiante
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(LoginProfe);
