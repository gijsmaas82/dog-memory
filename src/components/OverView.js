import React, { Component } from 'react'
import { DescriptionOfFirstGame, DescriptionOfSecondGame, DescriptionOfThirdGame } from "./descriptionsOfGames"
import "./overView.css"
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'
import UserStatsContainer from './UserStatsContainer'

export default class OverView extends Component {

    render() {
        // console.log(this.props.name)
        return (
            <div className="overviewBackground">
                <UserStatsContainer />
                <div className="headerOverview">
                    <Link to='./practice'><h1>Click here to practice</h1></Link>

                </div>
                <div className="buttons">
                    <Link to='/gameone'><button type="button" className="btn btn-primary btn-lg">First Game</button></Link>
                    <div className="divider" />
                    <Link to='/gametwo'><button type="button" className="btn btn-primary btn-lg">Second Game</button></Link>
                    <div className="divider" />
                    <Link to='/gamethree'> <button type="button" className="btn btn-primary btn-lg">Third Game</button></Link>
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
                <div className="explanation">
                    <p>In every game you get a hint which eliminates one option. You only get the hint one your first question or when you answered incorrect. Afer a streak of 5 answers the game gets more difficult.You can also use the keyboard. Enter to get the questions and answers and 1, 2 or 3 to choose the answers. Good luck!</p> 
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