import React from 'react';
import Logo from "../../images/clapperboard.png";
import {Link} from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
    return (
        <header className='header-footer p-2'>
            <div className='header container '>
                <div className="header-wrapper d-flex justify-content-between align-items-center p-3">
                    <div>
                        <Link to='/' className='logo-title'>
                            <img src={Logo} alt="" width='40' height='40' className='logo'/>
                            <h3 className='header-title'>Cinema</h3>
                        </Link>
                    </div>

                    <div className="menu-link">
                        <Link to={'/'} className="text-light mx-5">Home</Link>
                        <Search />
                    </div>

                </div>

            </div>
        </header>

    );
};

export default Header;