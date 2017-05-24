import React, {Component} from 'react';
import CurrentPerformance from '../Elements/current-performance';
import CurrentRating from '../Elements/current-rating';
import SupplierCategory from '../Elements/supplier-category';
import axios from 'axios';


const theme = {
    uco: {
        r: 93,
        g: 141,
        b: 152
    },
    af: {
        r: 224,
        g: 188,
        b: 83
    },
    pfad: {
        r: 105,
        g: 188,
        b: 98
    },
    tco: {
        r: 105,
        g: 188,
        b: 98
    },
    pes: {
        r: 82,
        g: 102,
        b: 172
    },
    sbeo: {
        r: 132,
        g: 94,
        b: 164
    },
    cpo: {
        r: 132,
        g: 94,
        b: 164
    },
    top: {
        r: 223,
        g: 98,
        b: 144
    }
};

class SupplierPerformance extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCategory:'uco',
      supplierData:[],
      selectedSupplier:'',
      selectedPerformance:[]
    }
  }

  selectCategory(selectedCategory){
    let selectedPerformance = this.state.supplierData.filter(d=>d.code.toLowerCase().includes(selectedCategory));
    this.setState({selectedCategory,selectedSupplier:'',selectedPerformance});
  }

  selectSupplier(selectedSupplier){
    let selectedPerformance = this.state.supplierData.filter(d=>d.code.toLowerCase() == selectedSupplier.toLowerCase());
    this.setState({selectedPerformance,selectedSupplier,selectedCategory:selectedSupplier.split('.')[0].toLowerCase()})
  }


  componentDidMount(){
    axios.get('https://nest-backend.herokuapp.com/supplier/list')
    .then(data =>{
      let selectedPerformance = data.data.filter(d=>d.code.toLowerCase().includes("uco"));
      this.setState({supplierData:data.data,selectedPerformance})
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    if (this.state.supplierData.length == 0) return (
      <div className="sk-cube-grid">
    <div className="sk-cube sk-cube1"></div>
    <div className="sk-cube sk-cube2"></div>
    <div className="sk-cube sk-cube3"></div>
    <div className="sk-cube sk-cube4"></div>
    <div className="sk-cube sk-cube5"></div>
    <div className="sk-cube sk-cube6"></div>
    <div className="sk-cube sk-cube7"></div>
    <div className="sk-cube sk-cube8"></div>
    <div className="sk-cube sk-cube9"></div>
  </div>
  )
    return (
      <div className = "supplier-interface">
        <SupplierCategory selectCategory = {this.selectCategory.bind(this)} selectedCategory = {this.state.selectedCategory}/>
        <CurrentPerformance data = {this.state.selectedPerformance} theme={theme[this.state.selectedCategory]} />
        <CurrentRating data = {this.state.selectedPerformance} theme={theme[this.state.selectedCategory]} selectSupplier ={this.selectSupplier.bind(this)}/>
      </div>
    )
  }
}
export default SupplierPerformance;
