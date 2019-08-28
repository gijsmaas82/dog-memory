import React, { Component } from 'react'

import "./Practice.css"
import { Link } from 'react-router-dom';
import UserName from './UserName'

export default class Practice extends Component {

  
  render() {
    
    return (
      <div className="practicePage">
        <div>
          <Link to="OverView" > Go Back to Overview </Link>
          <h1> Goodluck with practice <UserName/> </h1>
          { !this.props.dogs && 'loading...'}

          { this.props.dogs && 
           <ul className='practiceList' > {this.props.dogs.map(dog => {
            return <li
            id={dog} 
            key={dog} 
            className='practiceListItem'
            onClick={this.props.getDogImages}
            >{dog}</li>
           })} </ul>
          }
        </div>
        <div className="images">
          { this.props.images && this.props.images.map(image => {
            return <img className="image" src={image} alt="dog" />
          })
          }
         </div> 
      </div>
    )
  }
}
