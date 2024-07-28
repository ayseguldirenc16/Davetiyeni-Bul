
import './body.css';
import images from './images.json';

function ProductSelectionTable() {
    return (
        <div className="productSelectionTable">
            {images.map((image) => {
                return (
                    <div className="card" key={image.id}>
                        <img src={image.image} className="card-img-top" alt={image.title} />
                        <div className="card-body">
                            <h5 className="card-title">{image.title}</h5>
                            <p className="card-text">{image.description} </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductSelectionTable;
