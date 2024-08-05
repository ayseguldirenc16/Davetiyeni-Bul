import '../body.css';
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
function Content() {
    return (
        <>
            <hr />
            <div className="container content">
                <div className="row">
                    <div className="col">
                    
                        <h2 className="content-title mb-6 mt-6">BİZE ULAŞIN</h2>
                        
                        <form>
                        <div className="mb-3">
                                <label  className="form-label">Adınız:</label>
                                <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                            </div>
                            
                            <div className="mb-3">
                                <label  className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Konu:</label>
                                <input type="subject" className="form-control" id="exampleInputName" aria-describedby="subjectHelp" />
                                
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Mesaj:</label>
                                <input type="message" className="form-control" id="exampleInputName" aria-describedby="subjectHelp" />
                                
                            </div>
                           
                           
                            <button type="submit" className="btn btn-dark ">Gönder</button>
                        </form>
                    </div>
                    <div className="col">
                        <h3 className=' mt-4 ml-9 mb-16'>İletişim Bilgilerimiz</h3>
                        <hr />
                        <div className="list">
                        <IoMdCall  className='icon'/>
                        <p className=' font-bold'> irtibat : +90 555 555 5555</p>
                        </div>
                        <hr />
                        <div className="list">
                        <FaWhatsapp className=' icon' />
                        <p className="font-bold">Whatsapp İletişim Hattı:  0850 222 22 22 </p>
                        </div>
                        <hr />
                        <div className="list">
                        <CiMail  className=' icon'/>
                            <a href="mailto:info@example.com" className=' no-underline font-bold text-black'>info@davetiyenibul.com</a>
                        </div>
                        <hr />
                        <div className="list">
                        <CiLocationOn className=' icon' />
                        <p className=' font-bold' >Adres:  Bursa, Merkez</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content