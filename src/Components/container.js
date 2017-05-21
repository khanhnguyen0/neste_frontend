import React, {Component} from 'react';
import Audit from './audit';
import NewApplication from './new-application'
import ApprovedApplication from './approved-application'
import applicationData from '../assets/application.json';
import axios from 'axios';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      applicationData:[]
    }
  }

  componentDidMount(){
    // console.log(applicationData);
    axios.get('https://nest-backend.herokuapp.com/application/list')
    .then(data=>{
      this.setState({applicationData:data.data});
    })
    .catch(e=>{
      console.log(e);
    })

  }

  render(){
    if (this.state.applicationData.length ==0) return null;
    const newApplication = this.state.applicationData.filter(a=>a.current_status == "new");
    const auditingApplication = this.state.applicationData.filter(a=>a.current_status == "auditing");
    const approvedApplication = this.state.applicationData.filter(a=>a.current_status == "approved");


    return (
      <div className = "container">
        <NewApplication data = {newApplication}/>
        <Audit data = {auditingApplication}/>
        <ApprovedApplication data = {approvedApplication}/>
      </div>
    )
  }
}

export default Container;
