import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cookies, { get } from 'js-cookie';
import axios from 'axios';
import { Nav, NavDropdown, Navbar, Row, Card } from 'react-bootstrap';

import '../assets/styles/components/Search.scss';

const Admin = ({ originals }) => {

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
            <Nav.Link eventKey='1' href='/grupos'>
              📚Grupos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='3' href='/perfilprofe'>
              Perfil
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <section className='main'>
        <h2 className='main__title2'>Gupos Asignados</h2>
        <Row className='justify-content-md-center' style={{ width: '90%' }}>

          <Card style={{ width: '90%', margin: '20px', justifyContent: 'center' }}>
            <Card.Body>
              <Card.Title>Caminadores A</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>HRD315</Card.Subtitle>
              <Card.Text>
                Informacion del Grupo
              </Card.Text>
              <br />
              <Card.Link href='https://classroom.google.com/u/0/c/MTk2NDc3NjQzODgz'>Aula Virtual mxaaavq</Card.Link>


              <Card.Link href='/estudiantes/1'>Ver Alumnos</Card.Link>
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

export default connect(mapStateToProps, null)(Admin);
