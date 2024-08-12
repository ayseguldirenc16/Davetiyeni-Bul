import { useLocation } from 'react-router-dom';
import '../body.css';  

function Basket() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];  

  return (
    <div className="basket-container">
      <h1>Sepet</h1>
      {cartItems.length > 0 ? (
        <div className="basket-grid">
          {cartItems.map((item, index) => (
            <div className="basket-card" key={index}>
              <img src={item.img} alt={item.title} className="basket-card-img" />
              <div className="basket-card-body">
                <h4 className="basket-card-title">{item.title}</h4>
                <p className="basket-card-price">{item.price} TL</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Sepetiniz boş.</p>
      )}
    </div>
  );
}

export default Basket;
