import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import invitation from '../body/pages/invitation.json';
import '../body/body.css';
import { MdFavoriteBorder } from "react-icons/md";

function ProductCatalog() {
  const [cartItems, setCartItems] = useState([]);  // Sepet öğeleri için state
  const navigate = useNavigate();

  const ürünEkle = (invitation) => {
    setCartItems([...cartItems, invitation]);
    navigate('/Basket', { state: { cartItems: [...cartItems, invitation] } });  // Sepetim sayfasına yönlendirme
  };

  return (
    <div className="invitation">
      {invitation.map((item) => {
        return (
          <div className="invitation-item" key={item.id}>
            <img src={item.img} alt={item.title} className='invitation-img' />
            <h4>{item.title}</h4>
            <div className="product-info">
              <p>{item.price}</p>
              <button 
                className="buttonProductCatalogSepet"
                onClick={() => ürünEkle(item)}  // Butona tıklanınca ürün ekle
              >
                Sepete Ekle
              </button>
            </div>
            <button className="favorite-button"><MdFavoriteBorder /></button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCatalog;
