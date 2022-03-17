import "../single-product-view/SingleProductView.css";
import React from "react";
import {inject, observer } from 'mobx-react';
// import fullStar from './../../../../assets/full-start.png';
// import emptyStar from './../../../../assets/empty-star.png';
// import halfStar from './../../../../assets/half-star.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProductCard(props) {
    const store = props.productStore;

    const getLastElement = () => {
        let url = window.location.href;
        let lastElement = url.split('/').pop();
        return lastElement;
    }

    function checkId(product) {
        return product.id == getLastElement();
    }
    const products = store.productList.filter(checkId);

    const singleProduct = products.length > 0?products[0]:{};

    // console.log(singleProduct, "SingleProduct");
    
  return (
    
        <section className="singleProduct">
                <div id="singleProduct" className="card card-flex">
                    <img className="productImg" src={singleProduct.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{singleProduct.category}</h5>
                        <h6>{singleProduct.title}</h6>
                        <p className="card-text">{singleProduct.description}</p>
                        <label htmlFor="">$
                            {singleProduct.price - 5.0}</label>
                        <span>$ {singleProduct.price}</span> <br />
                        <div className="starrating row">
                            <div className="img-allignment">
                                {/* <img src={fullStar} />
                                <img src={halfStar} />
                                <img src={emptyStar} />                                 */}
                                {/* <img *ngIf="num == 1" src="../../../../../assets/full-start.png" />
                                <img *ngIf="num == 0" src="../../../../../assets/empty-star.png" />
                                <img *ngIf="num == 0.5" src="../../../../../assets/half-star.png" /> */}
                            </div>
                            {/* {singleProduct.rating.rate} */}
                        </div>
                    </div>
                </div>
            <footer>
                <Link to="/admin/product">
                    <button id="back" type="button">Back</button>
                </Link>
            </footer>
        </section>
        
  );
}
const SingleProductView = inject('productStore')(
    observer(ProductCard)
)
export default SingleProductView;