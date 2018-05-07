import React, {Component} from 'react';
import Donor from '../Donor/Donor'

class Donors extends Component{
  render(){
    const { id} = this.props.donors

    return(
      <div>
        {
          this.props.donors.map(donor => (
            <Donor key={donor.id} donor={donor}/>
          ))
        }
      </div>
    )
  }
}

export default Donors;
