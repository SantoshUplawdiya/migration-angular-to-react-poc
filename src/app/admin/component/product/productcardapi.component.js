import { useEffect, useState } from "react";
import { SingleProductView } from '../single-product-view/SingleProductView';
import axios from "axios";
import { useParams } from "react-router";
import '../single-product-view/SingleProductView.css';

const ProductCardGet = () => {

    const [card, setcard] = useState();
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            console.log(response.data);
            setcard(response.data);
        });

    }, []);
    return (

        <div className="post">
            <SingleProductView productcard={card}/>
        </div>
    );
};
export default ProductCardGet;