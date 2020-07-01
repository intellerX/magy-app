import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Info.scss';
const Info = () => {
	return (
		<div className = "info">		
			

			<div className = "panel__info">
                <div className = "panel1">
                    <h2 className= "title__2">Información de La Casita de Magy</h2>
                    <h3>Educacion unica y valiosa</h3>
                    <p >
                        jardín infantil con un ambiente Campestre en el centro de la ciudad de Cartago, Valle del Cauca. 
                    </p>
                    <p>
                        Dirección : carrera 3 número 14 63 barrio El carmen.  
                    </p>
                    <p>
                        Teléfonos:  2130104 -313714 6414 -3174592868
                    </p>
                </div>

                <div className = "panel2">
                    <img className = "panel2__image" id="Image"   data-type="image"  src="https://images.pexels.com/photos/3662803/pexels-photo-3662803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>

                    
                </div>
				
			</div>

            <img className = "image__info" id="Image"   data-type="image"  src="https://images.pexels.com/photos/3408130/pexels-photo-3408130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>


			
		</div>
	);
};

export default Info;