import React, { Component } from 'react'
import UserStatsContainer from './UserStatsContainer'
import "./Practice.css"
import { Link } from 'react-router-dom';

export default class Practice extends Component {
  
  render() {
    
    return (
      <div>
        <UserStatsContainer />
        
      <div className="practicePage">
        <div>
          
          
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
      <Link to='/overview' ><div className="link1" ><h2>Click to go back to the overview page</h2></div></Link>
      </div>
    )
  }
}
