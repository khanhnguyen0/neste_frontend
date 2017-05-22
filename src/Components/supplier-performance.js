import React, {Component} from 'react';
import CurrentPerformance from '../Elements/current-performance';
import CurrentRating from '../Elements/current-rating';
import axios from 'axios';

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
    selectedPerformance = this.state.supplierData.filter(d=>d.code.toLowerCase().includes(selectedCategory));
    this.setState({selectCategory,selectedSupplier:'',selectedPerformance});
  }

  selectSupplier(selectedSupplier){

    this.setState({selectedSupplier,selectedCategory:''})
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
    return (
      <div className = "supplier-interface">
        <CurrentPerformance data = {this.state.selectedPerformance} />
        <CurrentRating data = {this.state.selectedPerformance} />
      </div>
    )
  }
}
export default SupplierPerformance;
