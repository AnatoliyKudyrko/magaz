import React from 'react';
import './contact.css';
import  vector from '../../../assets/image/btn-vector.png'
import  car from '../../../assets/image/car_norm.jpg';
const Contact = () => {
    return (
        <div className='contact-container'>
           <div className="contact-title">
               <p>Fill out the form</p>
               <p> and we will call you</p>
           </div>
            <div className="form-container">
                <input type="text" placeholder='Your name'/>
                <input type="text" placeholder='Phone number'/>
                <button>
                    <span>Сall back</span>
                     <img src={vector} alt=""/>
                </button>
            </div>
            <img src={car} className='car-img' alt=""/>
        </div>
    );
};

export default Contact;