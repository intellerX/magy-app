import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cookies, { get } from 'js-cookie';
import axios from 'axios';
import { Nav, NavDropdown, Navbar, Row, Card } from 'react-bootstrap';

import '../assets/styles/components/Search.scss';

const Inicio = ({ originals }) => {

  const [form, setValues] = useState({
    search: [],
    saldo: 0,
    books: [],
  });

  useEffect(() => {
    try {

      axios.get('https://bookbasket1.herokuapp.com/api/books/', {}).then((response) => {

        setValues({
          ...form,
          books: response.data.data,
        });
      });

      axios.get(`https://bookbasket1.herokuapp.com/api/wallet/${cookies.get('id')}`, {}).then((response) => {
        console.log(response.data);

        setValues({
          ...form,
          saldo: response.data.quantity,
        });
      });

    } catch (err) {
      console.log(err);
    }

  }, []);

  const handleSearch = (event) => {

    setValues({
      ...form,
      'search': event.target.value,
    });
  };

  return (
    <>

      <Navbar bg='dark' variant='dark'>
        <Nav variant='pills' activeKey='1'>
          <Nav.Item>
            <Nav.Link eventKey='1' href='/inicio'>
              📚Salón
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='2' title='Ver Informacion de Profeofea' href='/profe'>
              Profe
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='3' href='/perfil'>
              Perfil
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <section className='main' style={{marginTop: '20px'}}>
        <h2 className='main__title2'>Salón de clases</h2>
        <Row className='justify-content-md-center' style={{ width: '100%' }}>

          <Card style={{ width: '90%', margin: '20px', justifyContent: 'center' }}>
            <Card.Body>
              <Card.Title>Jardin</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>Nombre profe</Card.Subtitle>
              <br />
              <Card.Link href='/addsaldo'>Aula Virtual</Card.Link>

              <Card.Link href='/tarjetas'>Información</Card.Link>
            </Card.Body>
          </Card>
        </Row>

      </section>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Inicio);
