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
      <div className = "approved-application">
        <p>Send to next level</p>
        {data.map((a,k)=>{
          return <ApprovedApplicationCard {...a} key = {k} />
        })}
      </div>
    )
  }
}

export default NewApplication;
