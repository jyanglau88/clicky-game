import React, {Component} from 'react';
import Card from './Card';
import Friends from "./../friends.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            score: 1,
            friends: Friends,
            selectedFriends: []
        };
    }

    // once clicked
    handleClick = (e) => {

        // grabs id
        let id = e.target.id;
        let exists = false;

        // loops through to see if any ids match
        this.state.selectedFriends.forEach(friend => {
            if (friend.id == id) {
                exists = true;
            }
        })

        if (exists) {
            // end the game if ids match
            this.endGame();
        }

        else {
            // loop json
            this.state.friends.forEach(friend => {
                // if ids match
                if (friend.id == id) {
                    // add to array
                    this.setState({selectedFriends: [...this.state.selectedFriends, friend]});
                    console.log(this.state.selectedFriends);
                    // update score
                    this.updateScore();
                }
            })  
        }
        
        // Shuffle
        this.setState({ friends: shuffle(this.state.friends)});
        console.log("Shuffling Friends");

    }

    // update current score
    updateScore = () => {
        this.setState({score: this.state.score + 1});
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    // ends game
    endGame = () => {
        console.log("Gotta catch em all!");
        // updates top score
        this.props.updateTopScore(this.state.score);
        // reset game 
        this.setState({score: 1, selectedFriends: []});
        // updates score to zero
        this.props.updateCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Friends.map(friend => <Card src={friend.image} key={friend.id} id={friend.id} alt={friend.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default CardContainer;