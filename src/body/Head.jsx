import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './body.css';

function Head() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="container-fluid">
                    <img src="images/logo.jpg" alt="Logo" className='navbar-img' />
                    <div className="navbar-text">
                        <div className="links">
                            <Link to="/">Anasayfa</Link>
                            <Link to="/About">Hakkımızda</Link>
                            <Link to="/Campaigns">Ürünlerimiz</Link>
                            <Link to="/Content">İletişim</Link>
                        </div>
                        <div className="dropdown">
                            <button 
                                className="btn dropdown-toggle" 
                                type="button" 
                                onClick={toggleDropdown}
                                aria-expanded={isDropdownOpen}
                            >
                                Üyelik
                            </button>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <li><Link className="dropdown-item" to="/uyelik" onClick={() => setIsDropdownOpen(false)}>Üye Ol</Link></li>
                                <li><Link className="dropdown-item" to="/login" onClick={() => setIsDropdownOpen(false)}>Giriş Yap</Link></li>
                                <li><Link className="dropdown-item" to="/OrderTracking" onClick={() => setIsDropdownOpen(false)}>Sipariş Takibi</Link></li>
                            </ul>
                        </div>
                    </div>
                    <form className="navbar-text d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Anahtar kelime girin" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Ara</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Head;
