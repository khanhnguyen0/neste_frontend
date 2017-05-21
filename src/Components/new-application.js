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
        <p>New application</p>
        {data.map((a,k)=>{
          return <NewApplicationCard {...a} key = {k} />
        })}
      </div>
    )
  }
}

export default NewApplication;
