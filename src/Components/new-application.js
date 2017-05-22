import React, {Component} from 'react';
import NewApplicationCard from '../Elements/new-application-card'

class NewApplication extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    const {data} = this.props;
    return (
      <div className = "new-application">
        <div className = "menu">
        <p>New application </p>
        <i className="fa fa-filter" aria-hidden="true"></i>
        </div>
        {data.map((a,k)=>{
          return <NewApplicationCard {...a} key = {k} />
        })}
      </div>
    )
  }
}

export default NewApplication;
