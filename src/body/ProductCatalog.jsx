import invitation from '../body/pages/invitation.json';
import '../body/body.css';
import { MdFavoriteBorder } from "react-icons/md";

function ProductCatalog() {
  return (
    <div className="  invitation">
      {invitation.map((invitation) => {
        return (
          <div className="invitation-item" key={invitation.id}>
            <img src={invitation.img} alt={invitation.title} className='invitation-img' />
            <h4>{invitation.title}</h4>
            <div className="product-info">
              <p>{invitation.price}</p>
              <button className="buttonProductCatalogSepet">Sepete Ekle</button>
            </div>
            <button className="favorite-button"><MdFavoriteBorder /></button>
          </div>
        )

      })}

    </div>
  )
}

export default ProductCatalog
