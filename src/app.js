import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Elements/nav-bar';
import MenuBar from './Elements/menu-bar';
import ApplicationPage from './Components/application-page';
import SupplierPerformance from './Components/supplier-performance';
import './Style/main.scss';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {selectedInterface:"application"}
  }

  changeInterface(selectedInterface){
    this.setState({selectedInterface})
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <NavBar />
        <MenuBar changeInterface = {this.changeInterface.bind(this)} selected = {this.state.selectedInterface}/>
        {this.state.selectedInterface=="application"?<ApplicationPage />:<SupplierPerformance />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


// import Chart from "chart";
// import rcl from "react-chart-radar";
//
// function setRandomChart() {
//   var chart = { msg: "testing random chart", osX: [], osY: [] };
//   for (var i=0,x=-10; i<20; i++,x++) {
//     chart.osX[i] = x;
//     chart.osY[i] = Math.random();
//   }
//   ReactDOM.render(
//     <rcl.ChartRadar data={chart}/>,
//     document.getElementById('root')
//   );
// }
// setInterval(() => { setRandomChart() }, 5000);
