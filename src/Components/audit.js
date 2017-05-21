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
      <div className = "audit-application">
        <p>Auditing application</p>
        {data.map((a,k)=>{
          return <AuditingApplicationCard {...a} key = {k} />
        })}
      </div>
    )
  }
}

export default Audit;
