import './body.css'

function Header(){
    return(
        <>
        
       <div className="container-fluid header">
         <div className="col header-text ">
            <h1 >ÖZEL GÜNÜNÜ ŞANSA BIRAKMA</h1>
            <h3 >Türkiye'nin En Çok Tercih Edilen Davetiye Sayfası</h3>
         </div>
         <div className="col header-img">
            <img src="images/kapak.jpg" alt="kapak-photo" />
            
         </div>
       </div>
        </>
    )
}
export default Header