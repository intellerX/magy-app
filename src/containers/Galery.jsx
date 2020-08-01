import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/Galery.scss';

const Galery = ({ galery }) => {
  return (
    <>
      <h1>Galeria Montessori</h1>

      <section id='galeria'>

        {galery.map(item => (

          <div className='galeria--item'>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <figure>
                <img className='galeria--img' src={item.cover} alt='Curso' />
                {' '}
                <h3>{item.title}</h3>
              </figure>
            </a>
          </div>

        ))}
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    galery: state.galery,
  };
};

export default connect(mapStateToProps, null)(Galery);
