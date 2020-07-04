import React, { Component } from 'react';
import ActionButton from '../ActionButton/actionButton.component';
import ActionButton2 from '../ActionButton2/actionButton2.component';
import './header.styles.scss';



class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navbackground: 'top-nav'
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            // handle the scroll event 
            const top = event.target.documentElement.scrollTop;
            if (top > 150) {
                this.setState({
                    navbackground: 'top-nav light-header'
                });
            }
            else if (top <= 150) {
                this.setState({
                    navbackground: 'top-nav'
                });
            }
        });
    }

    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-light light-bg fixed-top ${this.state.navbackground}`}>
                    <a className='navbar-brand' href='#'>
                        <svg width="29" height="36" viewBox="0 0 29 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 21.8692C29 30.3148 18.043 34.3659 11.4802 34.3659C-5.58263 40.6143 1.42529 27.5195 1.42529 19.0739C1.42529 10.6284 -2.84041 0 9.04261 0C15.6054 0 29 13.4237 29 21.8692Z" fill="white" />
                            <path d="M21.6533 21.3932C21.6533 25.925 14.6408 28.0988 10.4406 28.0988C-0.479555 31.4516 4.00552 24.4251 4.00552 19.8933C4.00552 15.3616 1.27547 9.65854 8.8806 9.65854C13.0808 9.65854 21.6533 16.8615 21.6533 21.3932Z" fill="#F1935C" />
                            <path d="M23.9733 18.7591C23.9733 23.2908 16.9608 25.4646 12.7606 25.4646C1.84044 28.8174 6.32552 21.7909 6.32552 17.2592C6.32552 12.7274 3.59547 7.02438 11.2006 7.02438C15.4008 7.02438 23.9733 14.2273 23.9733 18.7591Z" fill="#302B2B" />
                        </svg>


                    </a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'>
                        </span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item active'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Services</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Featured </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Contact</a>
                            </li>
                        </ul>
                        <div className='navbutton login'>
                            <ActionButton2>Login</ActionButton2>
                        </div>
                        <div className='navbutton'>
                            <ActionButton>Register</ActionButton>
                        </div>
                    </div>
                </nav>

                <div className='hero bg-overlay-light'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2 className='pt-40'> Instant Recharge of <span>Airtime</span><br />
                                    <span>Data Bundles</span> & <span className='accent'>Bills Payment</span>
                                </h2>
                                <p>We offer competitive rates.</p>
                            </div>
                        </div>
                        <div className='quicklinks'>
                            <ActionButton2>Buy Airtime</ActionButton2>
                            <ActionButton2>Buy Data</ActionButton2>
                            <ActionButton2>Bills Payment</ActionButton2>
                        </div>
                    </div>
                </div>
            </div >
        )

    }

}

export default Header;