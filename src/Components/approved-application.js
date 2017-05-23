import React, {Component} from 'react';
import ApprovedApplicationCard from '../Elements/approved-application-card'

class NewApplication extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    const {data} = this.props;
    return (
      <div style = {{flex:1}}>
        <div className = "menu">
          <p>Send to next level </p>
          <i className="fa fa-filter" aria-hidden="true"></i>
        </div>
      <div className = "approved-application">
        {data.map((a,k)=>{
          return <ApprovedApplicationCard {...a} key = {k} />
        })}
      </div>
    </div>
    )
  }
}

export default NewApplication;
