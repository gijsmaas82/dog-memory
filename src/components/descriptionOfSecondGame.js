import React, { Component } from 'react'

export default class DescriptionOfSecondGame extends Component {
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
