import React from 'react';
import Logo from "../../images/clapperboard.png";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <header className='header-footer p-2'>
            <div className=' container '>
                <div className="d-flex  align-items-center p-3">
                    <div>
                        <Link to='/' className='logo-title' >
                            <img src={Logo} alt="" width='40' height='40' className='footer-logo'/>
                            <h3 className='header-title'>Cinema</h3>
                        </Link>
                    </div>
                    <p className='decs-footer'>&copy;2021 Dilshat Aiupov</p>
                    <div className='icons'>
                        <Link  className="icon-contact">
                            <i className='bx bxl-facebook-circle'/>
                        </Link>
                        <Link href='https://www.linkedin.com/feed/' className="icon-contact ">
                            <i className='bx bxl-instagram-alt'/>
                        </Link>
                        <Link className="icon-contact">
                            <i className='bx bxl-linkedin-square'/>
                        </Link>
                    </div>
                </div>

            </div>
        </header>

    );
};

export default Footer;