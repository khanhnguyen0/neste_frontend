import React from 'react';
import PerformanceBar from './performance-bar';
import SupplierMap from './supplier-map';
import _ from 'lodash';


const CurrentPerformance = (props) =>{
  const {data,theme} = props;

  let updated_document = _.sumBy(data,'updated_document')/data.length
  let ontime_delivery = _.sumBy(data,'ontime_delivery')/data.length
  let certification_no = _.sumBy(data,'certification_no')/data.length
  let quality_rate = _.sumBy(data,'quality_rate')/data.length
  let traceability_logistics = _.sumBy(data,'traceability_logistics')/data.length
  let GHG = _.sumBy(data,d => parseInt(d.GHG))/data.length;
  console.log(data);
  return (
    <div className = "performance-container">
      <SupplierMap list = {data} />
    <div className = "current-performance">
        <h3>Current performance</h3>
        <div className = "performance-row">
          <p>Documents fulfilled</p>
          <PerformanceBar value = {updated_document/10} theme = {theme}/>
        </div>

        <div className = "performance-row">
          <p>No of Certifications</p>
          <PerformanceBar value = {certification_no/2} theme = {theme}/>
        </div>

        <div className = "performance-row">
          <p>Quality</p>
          <PerformanceBar value = {quality_rate/10} theme = {theme}/>
        </div>

        <div className = "performance-row">
          <p>On-time delivery</p>
          <PerformanceBar value = {ontime_delivery/10} theme = {theme}/>
        </div>

        <div className = "performance-row">
          <p>GHG</p>
          <PerformanceBar value = {GHG/5} theme = {theme}/>
        </div>

        <div className = "performance-row">
          <p>Traceability</p>
          <PerformanceBar value = {traceability_logistics/10} theme = {theme}/>
        </div>

    </div>
    </div>
  )
}

export default CurrentPerformance;
