import { Link } from "react-router-dom";
import ProductCatalog from '../ProductCatalog'
function Product() {
    return (
        <>
            <hr />
            <div className="product mt-4">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Davetiye Türleri
                        </button>
                        <ul className="dropdown-menu ">
                            <li><a className="dropdown-item" href="#">Vintage Davetiyeler</a></li>
                            <li><a className="dropdown-item" href="#">Şeffaf Davetiyeler</a></li>
                            <li><a className="dropdown-item" href="#">Mühürlü Davetiyeler</a></li>
                            <li><a className="dropdown-item" href="#">Özel Davetiyeler</a></li>
                            <li><a className="dropdown-item" href="#">Klasik Davetiyeler</a></li>
                            <li><a className="dropdown-item" href="#">Ekonomik Davetiyeler</a></li>
                        </ul>
                    </div>
                    <div className="product-links d-flex align-items-center">
                        <Link to="/invitationWords" className="no-underline mr-6 text-black">Davetiye Sözleri</Link>
                    </div>
                </div>
            </div>
            <hr />
            <ProductCatalog/>
        </>
    );
}

export default Product;
