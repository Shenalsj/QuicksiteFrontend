import React, { useState, useEffect } from "react";
import {GOOGLE_API_KEY} from '../../_helpers/constant'
import GoogleMapReact from 'google-map-react';
import marker from "../../assets/img/marker.png"

const AnyReactComponent = () => <div><img style={{height:30}} src={marker} alt="marker"/></div>;



const SimpleExample = (props) => {
  const [lat, setLat] = useState(62.1339172);
  const [changed,setChanged] = useState(false)
  const [dragable,setDragable] = useState(true);
  const [defaultCenter,setDefaultCenter] = useState({lat:62.1339172,lng:25.0954868})
  const [lng, setLng] = useState(25.0954868);
  const [zoom, setZoom] = useState(7);
  const position = {lat, lng};

 
  useEffect(() => {
    if (props?.lat && props?.lng) {
      setLat(props.lat);
      setLng(props.lng);
    }
  }, [props?.lat, props?.lng]);

  useEffect(()=>{
      if(props.addressChanged || props.edit){
        setChanged(true)
      }
  },[props.addressChanged,props.edit])


  const clickToFeature = (e) => {
    setLat(e.lat);
    setLng(e.lng);
    setChanged(true)
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${e.lat},${e.lng}&key=${GOOGLE_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if(data?.results && data.results.length !==0){
        props.setValue(
          "address",
          JSON.stringify({
            value:data.results[0] && data.results[0].formatted_address,
            address: data.results[0] && data.results[0].formatted_address,
            coordinates:{
              lat: e.lat,
              lng: e.lng,
            }
          })
        );
      }else{
        props.setValue(
          "address",
          JSON.stringify({
            lat: e.lat,
            lng: e.lng,
            address: "Joenvarrentie 38, 79600 Joroinen, Finland",
          })
        );
      }});
    
  };


  return (
    <div style={{height:220}}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={defaultCenter}
          draggable={dragable}
          defaultZoom={zoom}
          onChildMouseDown={()=>setDragable(false)}
          onChildMouseUp={()=>setDragable(true)}
          onChildMouseMove={(e,props,cordinates)=>clickToFeature(cordinates)}
          // onChange={clickToFeature}
          yesIWantToUseGoogleMapApiInternals={true}
          zoom={zoom}
          center={position}
          onCh
          options={()=>{
            return {
              scrollwheel:true
            }
          }}
          onClick={clickToFeature}
        >
          {changed && <AnyReactComponent
            lat={lat}
            lng={lng}
            text="My Marker"
          />}
          
        </GoogleMapReact>
    </div>
  );
};

export default SimpleExample;
