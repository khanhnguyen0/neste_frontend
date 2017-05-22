import React from 'react';
var ZingChart = require('zingchart-react').core
import _ from 'lodash';

let myConfig = {
  type : 'radar',
  plot : {
    aspect : 'area',
    animation: {
      effect:3,
      sequence:1,
      speed:700
    }
  },
  scaleV : {
    visible : false
  },
  scaleK : {
    values : '0:4:1',
    labels : ['SUP','BIO','SEC','SUS', 'FIN'],
    item : {
      fontColor : '#607D8B',
      backgroundColor : "white",
      borderColor : "#aeaeae",
      borderWidth : 1,
      padding : '5 10',
      borderRadius : 10
    },
    refLine : {
      lineColor : '#c10000'
    },
    tick : {
      lineColor : '#59869c',
      lineWidth : 2,
      lineStyle : 'dotted',
      size : 20
    },
    guide : {
      lineColor : "#607D8B",
      lineStyle : 'solid',
      alpha : 0.3,
      backgroundColor : "#c5c5c5 #718eb4"
    }
  },
  series : [
    {
      values : [20, 20, 54, 41, 41],
      lineColor : '#53a534',
      backgroundColor : '#689F38'
    }
  ]
};

const CurrentRating = (props)=>{
  const {data} = props;
  const sup_rating = Math.floor(_.sumBy(data,'sup_rating')/data.length);
  const fin_rating = Math.floor(_.sumBy(data,'fin_rating')/data.length);
  const bio_rating = Math.floor(_.sumBy(data,'bio_rating')/data.length);
  const sus_rating = Math.floor(_.sumBy(data,'sus_rating')/data.length);
  const sec_rating = Math.floor(_.sumBy(data,'sec_rating')/data.length);
  myConfig.series.values = [sup_rating,bio_rating,sec_rating,sus_rating,fin_rating];

  return(
    <div className = "current-rating">
      <ZingChart id="myChart" height="300" width="600" data={myConfig} />
    </div>
  )
}

export default CurrentRating;
