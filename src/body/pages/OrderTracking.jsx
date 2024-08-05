import '../body.css'
import { DiDotnet } from "react-icons/di";
function OrderTracking() {
  return (
    <div className="OrderTracking">
      <h1>Sipariş Takibi</h1>
      <form  className="order-form">
        <label htmlFor="order-id">Sipariş Numarınızı Girin:</label>
        <input type="text" id="order-id" name="order-id" required />
        <button className='order-button'>Kontrol Et</button>
      </form>
      
      <div className="order-text">
        <div className="text">
        <DiDotnet />
        <p>Siparişleriniz <b>3-10 iş günü</b> içerisinde kargoya teslim edilmektedir.</p>
        </div>
        <div className="text">
        <DiDotnet />
        <p>Acil siparişleriniz için whatsapp hattımız ile iletişime geçiniz</p>
        </div>
        <div className="text">
        <DiDotnet />
        <p>Siparişlerinizi <a href="https://gonderitakip.ptt.gov.tr/" className=' no-underline text-black font-bold'>PTT Kargo</a> takip edebilirsiniz .</p>
        </div>
        
       
      </div>
    </div>
  )
}

export default OrderTracking
