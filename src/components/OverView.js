import React, { Component } from 'react'
import { DescriptionOfFirstGame, DescriptionOfSecondGame, DescriptionOfThirdGame } from "./descriptionsOfGames"
import "./overView.css"
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'
import UserStatsContainer from './UserStatsContainer'
import OverViewPracticeDescription from './OverViewPracticeDescription';
import GameInstructor from './GameInstructor';

export default class OverView extends Component {

    render() {
        // console.log(this.props.name)
        return (
            <div>
                <UserStatsContainer />
                <div className="header">
                    
                    <Link to='./practice'><h1 >Practice</h1></Link>
                    <OverViewPracticeDescription />
                </div>
                <div className="buttons">
                    <Link to='/gameone'><button type="button" id="button" className="btn btn-primary btn-lg">First Game</button></Link>
                    <Link to='/gametwo'><button type="button" id="button" className="btn btn-primary btn-lg">Second Game</button></Link>
                    <Link to='/gamethree'><button type="button" id="button" className="btn btn-primary btn-lg">Third Game</button></Link>
              
                </div>
                <div className="descriptions">
                    <div className="descriptionsofgame">
                        <span className=""><DescriptionOfFirstGame /></span>
                    </div>
                    <div className="descriptionsofgame">
                        <span className=""><DescriptionOfSecondGame /></span>
                    </div>
                    <div className="descriptionsofgame">
                        <span className=""><DescriptionOfThirdGame /></span>
                    </div>
                </div>
                <div className="keyboardinstructors">
                   <GameInstructor />
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         name: state.login
//     }
// }
// export default connect(mapStateToProps)(OverView)