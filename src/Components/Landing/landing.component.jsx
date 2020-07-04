import React from 'react';
import  './landing.styles.scss';
import Header from '../Header/header.component';
import Aboutus from '../AboutUs/aboutus.component';

const Landing = () => {
    return (
        <div className='landing'>
            <Header />
            <Aboutus />
        </div>
    )
};


export default Landing;