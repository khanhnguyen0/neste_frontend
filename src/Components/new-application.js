import React, {Component} from 'react';
import NewApplicationCard from '../Elements/new-application-card'
import _ from 'lodash'

class NewApplication extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    const {data} = this.props;
    return (
      <div style = {{"flex":2,"display":"flex","flexDirection":"column","flexShrink":2,marginRight:"20px"}}>
        <div className = "menu">
          <p>New application </p>
          <i className="fa fa-filter" aria-hidden="true"></i>
          <i className="fa fa-filter" aria-hidden="true"></i>
        </div>
        <div className = "application-column">
      <div className = "new-application">
        {data.map((a,k)=>{
          return <NewApplicationCard {...a} key = {k} />
        })}
      </div>
      <div className = "new-application">
        {_.sortBy(data,'code').map((a,k)=>{
          return <NewApplicationCard {...a} key = {k} />
        })}
      </div>
    </div>

    </div>
    )
  }
}

export default NewApplication;
