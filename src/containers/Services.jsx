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
                    
                    <h4>No dudes en contactarnos para matricular a tu hij@.</h4>
                   
                    <p>Teléfonos:  2130104 -313714 6414 -3174592868</p>

                </div>

                <div className = "panel2">

                <h3>Jornada de la tarde:</h3>           

                    <p>Materno (grupo conejos 🐰) edad: 1 a 2 años.  de 1:30 pm a 5:30 pm.</p>
                    <p>Parvulos (grupo osos 🐻) lunes a viernes 1:30 pm a 5:30 pm.</p>     
                    <p>Prejardin (grupo peces 🐟) 1:30 am a 5:50 pm.</p>    
                    <p>Jardin (grupo ponys 🐴) 1:30 am a 5:50 pm.</p>    
                    <p>Transición (grupo gatos 🐱) 1:30 am a 5:50 pm.</p>
                </div>
				
			</div>

            <img className = "image__info" id="Image"   data-type="image"  src="https://images.pexels.com/photos/3408130/pexels-photo-3408130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>

            <div className = "panel__info"> 
                <div className = "panel1"> 
                    <h3>Servicio de lonchera</h3>           

                    <p>
                        ofrecemos una lonchera balanceada:proteina acompañada de Carbohidrato, fruta y jugo natural.
                        Escuela para padres:
                        un espacio especial en el que en cada período escolar con profecionales especializados se guiará a los padres en la maravillosa y privilegiada labor de educar.
                    </p>
                    
                </div>
            </div>
            <div className = "panel2">
                <h3>Escuela para abuelos</h3> 
                    <p>En tiempos en los que toda la familia se ve involucrada en la educación de los niño, es necesario orientar a los abuelos que están apoyando a sus hijos en el cuidado de los nietos para que en su roll de abuelos, den el apoyo adecuado a su nietos.</p>
            </div>            			
		</div>
	);
};

export default Services;