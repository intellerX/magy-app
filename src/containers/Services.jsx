import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Services.scss';
const Services = () => {
	return (
		<div className = "Services">		

            <div className = "title__box">
                <h1 className= "title"> Servicios que Ofrecemos </h1>
            </div>

            <h3>Educación preescolar flexible</h3>

            <h4>Horarios de lunes a viernes:</h4>	

			<div className = "panel__info">

            

                <div className = "panel1">        

                    <h3>Jornada de la mañana:</h3>           

                    <p>Materno (grupo conejos 🐰) edad: 1 a 2 años.  de 7:30 am a 11:30am.</p>
                    <p>Parvulos (grupo osos 🐻) lunes a viernes 7:30 am a 11:30am.</p>     
                    <p>Prejardin (grupo peces 🐟) 7:30 am a 11:50 am.</p>    
                    <p>Jardin (grupo ponys 🐴) 7:30 am a 11:50 am.</p>    
                    <p>Transición (grupo gatos 🐱) 7:30 am a 11:50 am.</p>    
                    
                    <h4>No dudes en contactarnos para matricular a tu hijo.</h4>
                   
                    <p>Teléfonos:  2130104 -313714 6414 -3174592868</p>

                </div>

                <div className = "panel2">

                    <h4 className = "par">
                        Creemos que los niños prosperan en un ambiente que valora su individualidad, y al mismo tiempo les brinda apoyo y oportunidades para crecer emocional, social y creativamente. Al desarrollar las fortalezas, intereses y la curiosidad de cada niño, los guiamos a explorar el mundo que los rodea, así como a desarrollar nuevas habilidades y formar relaciones estrechas.
                    </h4>
                </div>
				
			</div>

            <img className = "image__info" id="Image"   data-type="image"  src="https://images.pexels.com/photos/3408130/pexels-photo-3408130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>


			
		</div>
	);
};

export default Services;