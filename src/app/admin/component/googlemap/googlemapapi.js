import {GoogleMap} from "./googlemap";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import '../single-product-view/SingleProductView.css';

const GetMapLocation = () => {

    const [map, setmap] = useState();
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
            console.log(response.data);
            setmap(response.data);
        });

    }, []);
    return (

        <div className="map">
            <GoogleMap googlemap = {map}/>
        </div>
    );
};
export default GetMapLocation;