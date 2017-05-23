import React from 'react'
import Map,{Marker} from 'google-maps-react'

const containerStyle = {
  width:"50%",
  height:"50%"
}

const SupplierMap = (props) =>{
  const {list} = props;
  const zoom = list.length>1?1:6;
  const center = list.length>1?null:list[0].position;
  if (!list) return null;
  return (
    <div className = "supplier-map">
      <Map google={window.google} containerStyle = {containerStyle} zoom = {zoom} center = {center} >
      {list.length>0?list.map((s,k)=><Marker name = {s.supplier_name} title = {s.supplier_name} key = {k} position = {s.position} />):null}
    </Map>
    </div>
  )
}

export default SupplierMap;
