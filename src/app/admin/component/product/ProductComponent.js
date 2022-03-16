import React, { useEffect } from "react";
import "./ProductComponent.css";
import { useHistory } from "react-router";
import {inject, observer } from 'mobx-react';
import fullStar from './../../../../assets/full-start.png';
import emptyStar from './../../../../assets/empty-star.png';
import halfStar from './../../../../assets/half-star.png';

const ProductListApi = (props) => {
  const store = props.productStore;

  const history = useHistory();
  useEffect(() => {
    store.getProducts();
  }, []);

  useEffect(() => {
    store.getPages();
  }, [store.productList]);

  const routeHandler = (id) => {
    history.push(`/admin/product-detail/${id}`);
  };

  const handleSelect = (e) => {
    store.changePageSize(e.target.value);
    console.log(e.target.value, "Event");
  }

  return (
    <div className="container-fluid">
        <section>
            <header className="product-header">
                <label className="list">List Product</label>
                <div className="col-md-offset-11">
                    <p className="itemsPage">
                    Show items per page   
                    <select id="PerPage" onChange={handleSelect}>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                    </select>
                    </p>
                </div>
            </header>

            <div className="row col-md-12 col-sm-12">
                {   store.paginatedPosts.length > 0 &&
                    store.paginatedPosts.map((currElem, i) => {
                    return (
                        <div key={"key" + i} id="{{ 'productList' + i }} " className="inner-container">
                            <div className="card card-flex col-md-12 col-sm-12">
                                <img onClick={() => {routeHandler(currElem.id)}} src={currElem.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{currElem.category}</h5>
                                    <h6>{currElem.title}</h6>
                                    <p className="card-text">{currElem.description}</p>
                                    <label htmlFor="">$ {currElem.price - 5.0}</label>
                                    
                                    <span>$ {currElem.price}</span> <br />
                                    <div className="starrating row">
                                        <div className="img-allignment">
                                            <img src={fullStar} />
                                            <img src={emptyStar} />
                                            <img src={halfStar} />
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) 
                })}
            </div>
            <div id="pagination" className="pagination-allignment">
                {/* <pagination-controls></pagination-controls> */}

                <div className="navbottom_productlist">
                    <nav className="d-flex justify-content-center">
                        <ul className="pagination">
                        {store.pages.map((pageNo) => (
                            <li key={pageNo + "Key"}
                            className={
                                pageNo === store.currentPage ? "page-item active" : "page-item"
                            }
                            >
                            <p
                                className="productlists-page-link"
                                onClick={() => store.pagination(pageNo)}
                            >
                                {pageNo}
                            </p>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>

            </div>
        </section>
    </div>

  );
};
const ProductComponent = inject('productStore')(
    observer(ProductListApi)
)
export default ProductComponent;
