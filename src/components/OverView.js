import React, { Component } from 'react'
import DescriptionOfFirstGame  from "./descriptionOfFirstGame"
import DescriptionOfSecondGame from "./descriptionOfSecondGame"
import DescriptionOfThirdGame from "./descriptionOfThirdGame"
import "./overView.css"
import { Link } from 'react-router-dom';

class OverView extends Component {
    render() {
        // const descriptionsOfFirstGame = "In this game you'll get 15 questions. You see a picture of a dog and you have to choose the right dog breed.Easy: you start with 3 breeds and 3 possible answers. After 5 correct answers the game gets more difficult (3 more breeds will be added)."
        
        return (
            <div>
                <div>
                <Link to='./practice'><h1 className="header">Practice</h1></Link>
                 </div>
                 <div className="buttons">
                     <Link to='/gameone'><button type="button" className="btn btn-primary btn-lg">First Game</button></Link>
                     <div class="divider"/>
                     <Link to='/gametwo'><button type="button" className="btn btn-primary btn-lg">Second Game</button></Link>
                     <div class="divider"/>
                     <Link to='/gamethree'> <button type="button" className="btn btn-primary btn-lg">Third Game</button></Link>
                 </div>
                 <div className="descriptions">
                    <div className="descriptionsofgame">
                         <span className=""><DescriptionOfFirstGame/></span>
                    </div>
                    <div className="descriptionsofgame">
                     <span className=""><DescriptionOfSecondGame/></span>
                    </div>
                    <div className="descriptionsofgame">
                     <span className=""><DescriptionOfThirdGame/></span>
                    </div>  
                 </div>
            </div>
        )
    }
}


export default  OverView