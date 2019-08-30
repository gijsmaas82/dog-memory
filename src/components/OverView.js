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
            <div>
                <UserStatsContainer />
                <div className="overviewBackground">
                <div>
                    <Link to='./practice'><h1 className="header">Practice</h1></Link>

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