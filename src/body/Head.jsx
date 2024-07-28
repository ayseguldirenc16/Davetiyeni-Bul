import './body.css';

function Head() {
    return (
        <>
            <nav className="navbar sticky-top">
                <div className="container-fluid">
                    <img src="images/logo.jpg" alt="" className='navbar-img' />
                    <div className="navbar-text">
                        <div className="links">
                            <a href="#">Anasayfa</a>
                            <a href="#">Hakkımızda</a>
                            <a href="#">Kampanyalar</a>
                            <a href="#">İletişim</a>
                        </div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Üyelik
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Üye Ol</a></li>
                                <li><a className="dropdown-item" href="#">Giriş Yap</a></li>
                                <li><a className="dropdown-item" href="#">Sipariş Takibi</a></li>
                            </ul>
                        </div>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Head;
