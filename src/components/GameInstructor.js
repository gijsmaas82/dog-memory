import React, { Component } from 'react'

export default class GameInstructor extends Component {
    render() {
        const you = "You can choose the"
        const key = "in the keyboard "
        return (
            <div>
                <h3>Game Keyboard Instructions</h3>
                <div>You can start to game pressing <b>Enter</b> {key} </div> 
                <div>{you} first option by pressing <b>1</b> {key} </div> 
                <div>{you} second option by pressing <b>2</b> {key} </div> 
                <div>{you} third option by pressing <b>3</b> {key} </div> 
                <div>{you} hint option by pressing <b>Enter</b> {key} </div> 


            </div>
        )
    }
}
