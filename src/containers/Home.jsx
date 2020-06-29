import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/components/Home.scss';
import Image1 from '../assets/static/Image11.jpg'

import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState';


const Home = ({ mylist, trends, originals }) => {
	// const initialState = useInitialState(API);
	return (
		<div className = "home">
			
			<h1 className = "title">La Casita de Magy</h1>
			
			<img className = "image1" id="Image1"   data-type="image"  src={Image1}></img>

			<div>
				<h1 className= "title__2">La misión de La Casita de Magy</h1>
				<h3>Educacion unica y valiosa</h3>
				<p className = "par">
				Creemos que los niños prosperan en un ambiente que valora su individualidad, y al mismo tiempo les brinda apoyo y oportunidades para crecer emocional, social y creativamente. Al desarrollar las fortalezas, intereses y la curiosidad de cada niño, los guiamos a explorar el mundo que los rodea, así como a desarrollar nuevas habilidades y formar relaciones estrechas.
				</p>
			</div>

			<Categories title='Publicaiones'>
				<Carousel className = "carousel">
					{trends.map((item) => (
						<CarouselItem key={item.id} {...item}  />
					))}
				</Carousel>
			</Categories>

			
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		mylist: state.mylist,
		trends: state.trends,
		originals: state.originals,
	};
};
// export default Home;
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);