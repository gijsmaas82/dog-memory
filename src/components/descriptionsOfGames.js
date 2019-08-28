import React, { Component } from 'react'

export  class DescriptionOfFirstGame extends Component {
    render() {
        return (
            <div>
                In this game you'll get 15 questions. You see a picture of a dog and you have to choose the right dog breed.
Easy: you start with 3 breeds and 3 possible answers. After 5 correct answers the game gets more difficult (3 more breeds will be added).
Medium: you start with 10 breeds and 3 possible answers. After 5 correct answers the game gets more difficult (3 more breeds will be added).
Hard: You start with all the dog breeds and 3 possible answers.
            </div>
        )
    }
}

export  class DescriptionOfSecondGame extends Component {
    render() {
        return (
            <div>
                In this game you'll get 15 questions. You get a name of a dog breed and you have to choose the right picture.
Easy: you start with 3 breeds and 3 possible pictures. After 5 correct answers the game gets more difficult.
Medium: you start with 10 breeds and 6 possible pictures. After 5 correct answers the game gets more difficult.
Hard: You start with all the dog breeds and 6 possible pictures.

            </div>
        )
    }
}

export  class DescriptionOfThirdGame extends Component {
    render() {
        return (
            <div>
                In this game you'll get 15 questions. You will get a mix of questions of game 1 and 2.
Easy: you start with 3 breeds and 3 possible answers/pictures. After 5 correct answers the game gets more difficult.
Medium: you start with 10 breeds and 6 possible answers/pictures. After 5 correct answers the game gets more difficult.
Hard: You start with all the dog breeds and 6 possible answers/pictures.

            </div>
        )
    }
}


export default {DescriptionOfFirstGame, DescriptionOfSecondGame, DescriptionOfThirdGame}