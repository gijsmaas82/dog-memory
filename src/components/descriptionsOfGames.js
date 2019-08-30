import React, { Component } from 'react'

export  class DescriptionOfFirstGame extends Component {
    render() {
        return (
            <div>
                In this game you'll get 15 questions. 
                You get pictures of three dogs and you have to choose the right dog breed from three dog images.
               <h2><b>
               Good Luck!
               </b></h2> 
            </div>
        )
    }
}

export  class DescriptionOfSecondGame extends Component {
    render() {
        return (
            <div>
                In this game you'll get 15 questions. 
                You get a image of a dog breed and you have to choose the name from three name options. 
                Good Luck!
                <h2><b>
               Good Luck!
               </b></h2> 
            </div>
        )
    }
}

export  class DescriptionOfThirdGame extends Component {
    render() {
        return (
            <div>
                In this game you'll get 15 questions. 
                You  get a mix of questions of game 1 and 2.
                Good Luck!
                <h2><b>
               Good Luck!
               </b></h2> 
            </div>
        )
    }
}


export default {DescriptionOfFirstGame, DescriptionOfSecondGame, DescriptionOfThirdGame}