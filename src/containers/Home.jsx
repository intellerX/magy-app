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
				<h3>Propuesta pedagogica</h3>
				<p className = "par">
				nuestra propuesta pedagógica va más allá de encasillarnos en la educación tradicional. Nuestro proyecto, es una amalgama enriquecida con la pedagogía montessori y las inteligencias multiples. Es un instrumento que plasma nuestras intenciones educativas que van encaminadas a formar niños  independientes, líderes, preparados para enfrentar el mundo con más asertividad.
				</p>
			</div>

			<Categories title='Publicaiones'>
				<Carousel className = "carousel">
					{trends.map((item) => (
						<CarouselItem key={item.id} {...item}  />
					))}
				</Carousel>
			</Categories>
							
			<div dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.01349103469977!2d-75.9169507!3d4.7512781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38714751cd6395%3A0xdb37bc25ca3a345b!2sLa%20Casita%20de%20Magy!5e0!3m2!1ses!2sco!4v1593642280353!5m2!1ses!2sco" width="1000" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>` }} />
			
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