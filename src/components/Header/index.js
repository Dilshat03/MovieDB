import React from 'react';
import Logo from "../../images/clapperboard.png";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='bg-secondary'>
            <div className='header container '>
                <div className="header-wrapper d-flex justify-content-between align-items-center p-3">
                    <div>
                        <Link to='/'>
                            <img src={Logo} alt="" width='40' height='40'/>
                        </Link>
                    </div>
                    <div>
                        <h1 className=''>Cinema</h1>
                    </div>

                    <div className="menu-link">
                        <Link to={'/'} className="text-light">Home</Link>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;