import React, { Component } from 'react'

export  class DescriptionOfFirstGame extends Component {
    render() {
        return (
            <div>
                In game one you will get 15 questions. You first get the breed name and you have to choose the right picture. 
            </div>
        )
    }
}

export  class DescriptionOfSecondGame extends Component {
    render() {
        return (
            <div>
                In this game you'll get 15 questions. You first get a picture of the dog and you have to choose the right dog breed.

            </div>
        )
    }
}

export  class DescriptionOfThirdGame extends Component {
    render() {
        return (
            <div>
                In this game you'll get 15 questions. They will be a mix of the questions of game one and game two.
            </div>
        )
    }
}


export default {DescriptionOfFirstGame, DescriptionOfSecondGame, DescriptionOfThirdGame}