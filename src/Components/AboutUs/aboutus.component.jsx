import React from 'react';
import './aboutus.styles.scss';

const Aboutus = () => {
    return (
        <div>
            <div class='container-fluid about-section'>
                <div class='text-center title'>
                    <h1>About Us</h1>
                    <p>Dab focuses on offering subsidised Internet subscription and Airtime on all Telecommunication Networks. You are sure of saving on your data/airtime.</p>
                </div>


                <div className='container home-content1'>
                    <div className='row'>
                        <div className='col-md-6 content1-left'>
                            <h3><strong>Recharge Airtime and Data</strong></h3>
                            <p className='lead'>Dab focuses on offering subsidised Internet subscription and Airtime on all Telecommunication Networks. You are sure of saving on your data/airtime.</p>
                        </div>
                        <div className='col-md-6 content1-right'>
                            <h3><strong>Make Bills Payments</strong></h3>
                            <p className='lead'>With Dab you can subscribe for your CableTV (DStv, GOtv and Startimes), Electricity Bill Payment and so much more at your finger tip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Aboutus;