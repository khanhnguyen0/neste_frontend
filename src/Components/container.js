import React, {Component} from 'react';
import Audit from './audit';
import NewApplication from './new-application'
import ApprovedApplication from './approved-application'
import applicationData from '../assets/application.json';

class Container extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(applicationData);

  }

  render(){
    const newApplication = applicationData.filter(a=>a.current_status == "new");
    const auditingApplication = applicationData.filter(a=>a.current_status == "auditing");
    const approvedApplication = applicationData.filter(a=>a.current_status == "approved");


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
