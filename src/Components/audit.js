import React, {Component} from 'react';
import AuditingApplicationCard from '../Elements/auditing-application-card';


class Audit extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    const {data} = this.props;
    return (
      <div style = {{"marginRight":"20px","flex":1}}>
      <div className = "menu">
        <p>Audit</p>
        <i className="fa fa-filter" aria-hidden="true"></i>
      </div>
      <div className = "audit-application">
        {data.map((a,k)=>{
          return <AuditingApplicationCard {...a} key = {k} />
        })}
      </div>
    </div>
    )
  }
}

export default Audit;
