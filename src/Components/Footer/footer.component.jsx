import React from 'react';
import './footer.styles.scss';

import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Instagram } from 'react-feather';
import { Youtube } from 'react-feather';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='row footer-row'>
                <div className='columns col-md-3  col-sm-6'>
                    <h3>Connect with us</h3>
                    <div className='sm-list'>
                        <Facebook className='icons' />
                        <Twitter className='icons' />
                        <Linkedin className='icons' />
                        <Instagram className='icons' />
                    </div>
                </div>
                <div className='columns col-md-3  col-sm-6'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a>Buy Airtime</a></li>
                        <li><a>Buy Data Bundles</a></li>
                        <li><a>Renew TV Subscription</a></li>
                        <li><a>Deposit</a></li>
                        <li><a>Developers</a></li>

                    </ul>
                </div>
                <div className='columns col-md-3  col-sm-6'>
                    <h3>Contact us</h3>
                    <p><span>Tel:</span>080-XXXX-XXXXX</p>
                    <p><span>Email:</span>info@dab.com</p>
                </div>
                <div className='columns col-md-3  col-sm-6'>
                    <h3>Address</h3>
                    <p>No 1 Akin Lakanu Close Adeniyi Jones</p>
                </div>
            </div>
            <p className='text-center text-copyright'>Built with &#128151; by Dab <span>&#169;</span> Copyright 2020. All rights reserved</p>
        </div>
    )
};

export default Footer;