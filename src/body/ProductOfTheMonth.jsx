import { CiShop } from "react-icons/ci";
import './body.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
function ProductOfTheMonth(){
    return(
        <>
        <hr />
        <div className="container ProductOfTheMonth">
        <div className="card ProductOfTheMonth-card">
            <div className="card-icon">
                <CiShop size={50} className="ci-shop" />
            </div>
            <div className="card-body">
                <h4 className="card-title">100% Mutluluk</h4>
                <p className="card-text">
                    08.00 - 20.00 saatleri arasında ulaşabileceğin müşteri hizmetleri ekibi
                </p>
            </div>
        </div>
        <div className="card ProductOfTheMonth-card">
            <div className="card-icon">
            <IoHomeOutline size={40} />
            </div>
            <div className="card-body">
                <h4 className="card-title">Adrese Teslim Kargo</h4>
                <p className="card-text">
                Tercihe bağlı kargo şirketi seçeneği ile hızlı teslimat
                </p>
            </div>
        </div>
        <div className="card ProductOfTheMonth-card">
            <div className="card-icon">
            <FaRegHeart size={40} />
            </div>
            <div className="card-body">
                <h4 className="card-title">Kaliteli Ürünler</h4>
                <p className="card-text">
                1. kalite malzemeler, son teknoloji cihazlar, el yapımı ürünler ve şık hediye paketleri ile gönderim
                </p>
            </div>
        </div>
        </div>
        <hr />

        
        
        </>
    )
}

export default ProductOfTheMonth