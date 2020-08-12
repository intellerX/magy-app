import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App.js';
import reducer from './reducers';

import Im1 from './assets/static/montesori/m1.jpg';
import Im2 from './assets/static/montesori/m2.jpg';
import Im3 from './assets/static/montesori/m3.jpg';
import Im4 from './assets/static/montesori/m4.jpg';
import Im5 from './assets/static/montesori/m5.jpg';
import Im6 from './assets/static/montesori/m6.jpg';

import m1 from './assets/static/montesori/galery/1.jpg';
import m2 from './assets/static/montesori/galery/2.jpg';
import m3 from './assets/static/montesori/galery/3.jpg';
import m4 from './assets/static/montesori/galery/4.jpg';
import m5 from './assets/static/montesori/galery/5.jpg';
import m6 from './assets/static/montesori/galery/6.jpg';
import m7 from './assets/static/montesori/galery/7.jpg';
import m8 from './assets/static/montesori/galery/8.jpg';
import m9 from './assets/static/montesori/galery/9.jpg';
import m10 from './assets/static/montesori/galery/10.jpg';
import m11 from './assets/static/montesori/galery/11.jpg';
import m12 from './assets/static/montesori/galery/12.jpg';
import m13 from './assets/static/montesori/galery/13.jpg';
import m14 from './assets/static/montesori/galery/14.jpg';
import m15 from './assets/static/montesori/galery/15.jpg';
import m16 from './assets/static/montesori/galery/16.jpg';
import m17 from './assets/static/montesori/galery/17.jpg';
import m18 from './assets/static/montesori/galery/18.jpg';
import m19 from './assets/static/montesori/galery/19.jpg';
import m20 from './assets/static/montesori/galery/20.jpg';
import m21 from './assets/static/montesori/galery/21.jpg';
import m22 from './assets/static/montesori/galery/22.jpg';
import m23 from './assets/static/montesori/galery/23.jpg';
import m24 from './assets/static/montesori/galery/24.jpg';

const initialState = {
  user: {},
  playing: {},
  mylist: [],
  trends: [
    {
      id: 2,
      slug: 'tvshow-2',
      title: 'Método Montessori',
      type: 'Scripted',
      language: 'English',
      year: 2020,
      contentRating: '16+',
      duration: 164,
      cover: Im1,
      description: 'El método Montessori se caracteriza por proveer un ambiente preparado: ordenado, estético, simple, real, donde cada elemento tiene su razón de ser en el desarrollo de los niños. Promueve naturalmente la socialización, el respeto y la solidaridad.',
      source: '/galery',
    },
    {
      id: 3,
      slug: 'tvshow-3',
      title: 'Método Montessori',
      type: 'Adventure',
      language: 'English',
      year: 2020,
      contentRating: '16+',
      duration: 137,
      cover: Im2,
      description: 'El ambiente preparado ofrece al niño oportunidades para comprometerse en un trabajo interesante, elegido libremente, que propicia prolongados períodos de concentración que no deben ser interrumpidos.',
      source: '/galery',
    },
    {
      id: 4,
      slug: 'tvshow-4',
      title: 'Método Montessori',
      type: 'Comedy',
      language: 'English',
      year: 2020,
      contentRating: '16+',
      duration: 163,
      cover: Im3,
      description: 'Los niños trabajan con materiales concretos científicamente diseñados, que brindan las llaves para explorar el mundo y para desarrollar habilidades cognitivas básicas. Los materiales están diseñados para que el niño pueda reconocer el error por sí mismo y hacerse responsable del propio aprendizaje.',
      source: '/galery',
    },
    {
      id: 5,
      slug: 'tvshow-5',
      title: 'Método Montessori',
      type: 'Scripted',
      language: 'English',
      year: 2020,
      contentRating: '16+',
      duration: 194,
      cover: Im4,
      description: 'El adulto es un observador y un guía; ayuda y estimula al niño en todos sus esfuerzos. Le permite actuar, querer y pensar por sí mismo, ayudándolo a desarrollar confianza y disciplina interior.',
      source: '/galery',
    },
    {
      id: 6,
      slug: 'tvshow-6',
      title: 'Método Montessori',
      type: 'Scripted',
      language: 'English',
      year: 2020,
      contentRating: '16+',
      duration: 124,
      cover: Im5,
      description: 'La educación Montessori cubre todos los períodos educativos desde el nacimiento hasta los 18 años brindando un currículo integrado.',
      source: '/galery',
    },
    {
      id: 7,
      slug: 'tvshow-7',
      title: 'Método Montessori',
      type: 'Drama',
      language: 'English',
      year: 2020,
      contentRating: '16+',
      duration: 179,
      cover: Im6,
      description: 'El ambiente promueve la independencia del niño en la exploración y el proceso de aprendizaje. La libertad y la autodisciplina hacen posible que cada niño encuentre actividades que dan respuesta a sus necesidades evolutivas.',
      source: '/galery',
    },
  ],
  'notices': [
    {
      'id': 1,
      'title': 'Regreso a clases',
      'cover': 'https://i9.ytimg.com/vi/66fWJNJQKMY/mqdefault.jpg?time=1595817106800&sqp=CKj4-PgF&rs=AOn4CLAIIWsKY4TeuDKj-uSK0biXo24eOA',
      'description': 'Prepárate este 10 de agosto para el regreso a clases en La Casita de Magy.',
      'source': 'https://www.youtube.com/embed/66fWJNJQKMY?rel=0',
    },
    {
      'id': 2,
      'title': 'Una tarde en La Casita de Magy',
      'cover': 'https://i9.ytimg.com/vi/66fWJNJQKMY/mqdefault.jpg?time=1595817106800&sqp=CKj4-PgF&rs=AOn4CLAIIWsKY4TeuDKj-uSK0biXo24eOA',
      'description': 'Un atardecer en casita de Magy. Pronto saldrá el sol y nos volveremos a encontrar.',
      'source': 'https://www.youtube.com/embed/jOWQBeI207Y?rel=0',
    },
    {
      'id': 3,
      'title': 'Que opinan los papas del inicio de clases?',
      'cover': 'https://i9.ytimg.com/vi/66fWJNJQKMY/mqdefault.jpg?time=1595817106800&sqp=CKj4-PgF&rs=AOn4CLAIIWsKY4TeuDKj-uSK0biXo24eOA',
      'description': 'Conoce la opinión de los padres acerca del inicio de clases.',
      'source': 'https://youtu.be/yAgjPDA_ris?rel=0',
    },
  ],
  'galery': [
    {
      'id': 1,
      'title': 'Aula Montessori',
      'cover': m4,
    },
    {
      'id': 2,
      'title': 'Aula Montessori',
      'cover': m2,
    },
    {
      'id': 3,
      'title': 'Aula Montessori',
      'cover': m3,
    },
    {
      'id': 4,
      'title': 'Aula Montessori',
      'cover': m1,
    },
    {
      'id': 5,
      'title': 'Aula Montessori',
      'cover': m5,
    },
    {
      'id': 6,
      'title': 'Aula Montessori',
      'cover': m6,
    },
    {
      'id': 7,
      'title': 'Aula Montessori',
      'cover': m7,
    },
    {
      'id': 8,
      'title': 'Aula Montessori',
      'cover': m8,
    },
    {
      'id': 9,
      'title': 'Aula Montessori',
      'cover': m9,
    },
    {
      'id': 11,
      'title': 'Aula Montessori',
      'cover': m10,
    },
    {
      'id': 12,
      'title': 'Aula Montessori',
      'cover': m11,
    },
    {
      'id': 13,
      'title': 'Aula Montessori',
      'cover': m12,
    },
    {
      'id': 14,
      'title': 'Aula Montessori',
      'cover': m13,
    },
    {
      'id': 15,
      'title': 'Aula Montessori',
      'cover': m14,
    },
    {
      'id': 16,
      'title': 'Aula Montessori',
      'cover': m15,
    },
    {
      'id': 17,
      'title': 'Aula Montessori',
      'cover': m16,
    },
    {
      'id': 18,
      'title': 'Aula Montessori',
      'cover': m16,
    },
    {
      'id': 19,
      'title': 'Aula Montessori',
      'cover': m17,
    },
    {
      'id': 20,
      'title': 'Aula Montessori',
      'cover': m18,
    },
    {
      'id': 21,
      'title': 'Aula Montessori',
      'cover': m19,
    },
    {
      'id': 22,
      'title': 'Aula Montessori',
      'cover': m20,
    },
    {
      'id': 23,
      'title': 'Aula Montessori',
      'cover': m21,
    },
    {
      'id': 24,
      'title': 'Aula Montessori',
      'cover': m22,
    },
    {
      'id': 24,
      'title': 'Aula Montessori',
      'cover': m23,
    },
    {
      'id': 24,
      'title': 'Aula Montessori',
      'cover': m24,
    },
  ],

};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
