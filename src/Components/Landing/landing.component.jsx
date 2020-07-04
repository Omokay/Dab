import React from 'react';
import  './landing.styles.scss';
import Header from '../Header/header.component';
import Aboutus from '../AboutUs/aboutus.component';
import Footer from '../Footer/footer.component';

const Landing = () => {
    return (
        <div className='landing'>
            <Header />
            <Aboutus />
            <Footer />
        </div>
    )
};


export default Landing;