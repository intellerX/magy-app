import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

// Redux
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

import Im1 from '../src/assets/static/montesori/m1.jpg';
import Im2 from '../src/assets/static/montesori/m2.jpg';
import Im3 from '../src/assets/static/montesori/m3.jpg';
import Im4 from '../src/assets/static/montesori/m4.jpg';
import Im5 from '../src/assets/static/montesori/m5.jpg';
import Im6 from '../src/assets/static/montesori/m6.jpg';

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
			source: 'https://www.youtube.com/embed/nLflWQuswYg?autoplay=1',
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
			source: 'https://www.youtube.com/embed/nLflWQuswYg?autoplay=1',
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
			source: 'https://www.youtube.com/embed/nLflWQuswYg?autoplay=1',
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
			source: 'https://www.youtube.com/embed/nLflWQuswYg?autoplay=1',
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
			source: 'https://www.youtube.com/embed/nLflWQuswYg?autoplay=1',
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
			source: 'https://www.youtube.com/embed/nLflWQuswYg?autoplay=1',
		},
	],
	originals: [
		{
			id: 8,
			slug: 'tvshow-8',
			title: 'Método Montessori',
			type: 'Action',
			language: 'English',
			year: 2012,
			contentRating: '16+',
			duration: 148,
			cover: 'http://dummyimage.com/800x600.png/306880/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 9,
			slug: 'tvshow-9',
			title: 'Alien Highway',
			type: 'Action',
			language: 'English',
			year: 2019,
			contentRating: '16+',
			duration: 128,
			cover: 'http://dummyimage.com/800x600.png/604180/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 10,
			slug: 'tvshow-10',
			title: 'Elementary',
			type: 'Animation',
			language: 'English',
			year: 2011,
			contentRating: '16+',
			duration: 346,
			cover: 'http://dummyimage.com/800x600.png/FF91BA/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 11,
			slug: 'tvshow-11',
			title: 'Strange Angel',
			type: 'War',
			language: 'English',
			year: 2015,
			contentRating: '16+',
			duration: 226,
			cover: 'http://dummyimage.com/800x600.png/45807C/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 12,
			slug: 'tvshow-12',
			title: 'Private Eyes',
			type: 'Comedy',
			language: 'English',
			year: 2018,
			contentRating: '16+',
			duration: 190,
			cover: 'http://dummyimage.com/800x600.png/577380/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 13,
			slug: 'tvshow-13',
			title: 'NCIS: Los Angeles',
			type: 'Drama',
			language: 'English',
			year: 2010,
			contentRating: '16+',
			duration: 160,
			cover: 'http://dummyimage.com/800x600.png/5472FF/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
	],
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);