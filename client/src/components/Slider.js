import React from 'react';
import './slider.css';
import slider from '../Utilities/Slider';

export default class Slider extends React.Component {
   componentDidMount() {
       slider();
   }

   render() {
       return (
           <div className='body'>

               <div className='load'>
                   <div className="roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
               </div>

               <div className="slider">
                   <div className="slider-inner">
                       <div className="slide active"><h3>Avocado Notes</h3><h5>What is Avocado?</h5><h5>Glad you asked!</h5></div>
                       <div className="slide"><h5>Avocado is an organic web application for taking and storing notes online.

</h5></div>
                       <div className="slide"><h5>Freedom to edit and create personalized notes!</h5></div>
                       <div className="slide"><h5>Made for developers by developers</h5><h5>Create a free account and give it a try.</h5></div>
                   </div>

                   <nav className="slider-nav">
                       <div className="active"></div>
                       <div></div>
                       <div></div>
                       <div></div>
                   </nav>
               </div>
           </div>
       )
   }
}