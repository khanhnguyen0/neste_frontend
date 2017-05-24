import React from 'react';
import Radar from 'react-d3-radar';
import _ from 'lodash';
import SupplierList from './supplier-list';

const radarConfig = {
  width:300,
  height:300,
  padding:50,
  domainMax:100,
  highlighted:null
}

const CurrentRating = (props)=>{
  const {data, selectSupplier,theme} = props;
  const sup_rating = Math.floor(_.sumBy(data,'sup_rating')/data.length);
  const fin_rating = Math.floor(_.sumBy(data,'fin_rating')/data.length);
  const bio_rating = Math.floor(_.sumBy(data,'bio_rating')/data.length);
  const sus_rating = Math.floor(_.sumBy(data,'sus_rating')/data.length);
  const sec_rating = Math.floor(_.sumBy(data,'sec_rating')/data.length);

  const ratingData = {
   variables: [
     {key: 'sustainability', label: 'SUS'},
     {key: 'finance', label: 'FIN'},
     {key: 'security', label: 'SEC'},
     {key: 'supplychain', label: 'SUP'},
     {key: 'bio-compliance', label: 'BIO'},
   ],
   sets: [
     {
       key: 'me',
       label: 'Current rating',
       values: {
         sustainability: sus_rating,
         finance: fin_rating,
         security: sec_rating,
         supplychain: sup_rating,
         "bio-compliance": bio_rating
       },
     }
   ],
 }



  return(
    <div className = "current-rating">
      <SupplierList list = {data} selectSupplier = {selectSupplier} theme = {theme}/>
      <div className = "radar">
        <h3>Rating summary</h3>
        <Radar {...radarConfig} data={ratingData} />
      </div>
      </div>
  )
}

export default CurrentRating;
