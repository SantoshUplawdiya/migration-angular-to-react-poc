import '../single-product-view/SingleProductView.css';
import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div style={{
  fontSize:"2rem",
  color:"red"
}}>{text}</div>;

const Lat = ({lat}) => <div
style={{
  fontSize:"1rem",
  color:"red"
  
}}
> ({lat})</div>;

// const Lng =({lng}) => <div
// style={{
//   fontSize:"1rem",
//   color:"red"
// }}
// >({lng})</div>;

export function GoogleMap({ googlemap}) {
    const defaultProps = {
      center: {
       lat : 23,
       lng : 24.5477
        },
        zoom: 5
      };

  return (
    <div style={{ height: '70vh', width: '70%', marginTop : '8vh', marginLeft : '8vw'}}>

    
    <GoogleMapReact
      bootstrapURLKeys={{ key: ""}}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
     >
  
    
    <AnyReactComponent
     text={googlemap?.name}
     />
 
    <Lat
     lat={googlemap?.address.geo.lat}
    />
    {/* <Lng
    lng={googlemap?.address.geo.lng}

    />
   */}

   
    </GoogleMapReact> 
  </div>
    )
  }


