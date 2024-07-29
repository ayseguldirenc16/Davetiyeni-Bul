import './body.css';
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <>
        <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>KURUMSAL</h5>
        <ul className="nav flex-column">
          <Link to="/" className="nav-item mb-2 p-0 text-body-secondary no-underline">Anasayfa</Link>
          <Link to="About" className="nav-item mb-2 p-0 text-body-secondary no-underline">Hakkımızda</Link>
          <Link to="/Content" className="nav-item mb-2 p-0 text-body-secondary no-underline">İletişim</Link>
          <Link to="/SSS" className="nav-item mb-2 p-0 text-body-secondary no-underline">S.S.S </Link>

        </ul>
      </div>

      

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Bize Ulaşın</h5>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label  className="visually-hidden">Email Adres</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Gönder</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024  Tüm Hakları Saklıdır.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><CiFacebook/></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><CiInstagram/></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><RiTwitterXLine /></a></li>
      </ul>
    </div>
  </footer>
</div>

    

    
  
        </>
    )
}
export default Footer