import React from 'react'
import Map,{Marker} from 'google-maps-react'

const containerStyle = {
  width:"50%",
  height:"50%"
}

const SupplierMap = (props) =>{
  const {list} = props;
  return (
    <div className = "supplier-map">
      <Map google={window.google} containerStyle = {containerStyle} zoom = {2} >
      {list.length>0?list.map((s,k)=><Marker title = {s.supplier_name} key = {k} position = {s.position} />):null}
    </Map>
    </div>
  )
}

export default SupplierMap;
