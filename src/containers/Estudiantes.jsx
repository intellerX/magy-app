import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cookies, { get } from 'js-cookie';
import axios from 'axios';
import { Nav, NavDropdown, Navbar, Row, Card } from 'react-bootstrap';

import '../assets/styles/components/Search.scss';

const Estudiantes = ({ originals }) => {

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
            <Nav.Link eventKey='1' href='/administrador'>
              📚Grupos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='3' href='/perfil'>
              Perfil
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <section className='main'>
        <br/>
        <h2 className='main__title2'>Estudiantes</h2>
        <Row className='justify-content-md-center' style={{ width: '90%' }}>

          <Card style={{ width: '90%', margin: '20px', justifyContent: 'center' }}>
            <Card.Body>
              <Card.Title>Jhoana Valencia Arteta</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>1214141</Card.Subtitle>
              <Card.Text>
                Fecha de nacimiento: 20/3/2019
                <br/>
                Padre: Luis Guillermo Davila
                /
                Madre: Martha Lucia Rodrigues
              </Card.Text>
              <Card.Link href='/perfil'>Ver Perfil</Card.Link>
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

export default connect(mapStateToProps, null)(Estudiantes);
