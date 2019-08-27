import React, { Component } from 'react'

export default class DescriptionOfFirstGame extends Component {
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
