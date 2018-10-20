import React, {Component} from 'react';
import Card from './Card';
import Friends from "./../friends.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    constructor(props) {
        super(props);

        // setting the state: score is at 1, friends is pulling in the friend json, and we have no selected friends yet
        this.state = {
            score: 1,
            friends: Friends,
            selectedFriends: []
        };
    }

    
    // when the user clicks on a friend card
    handleClick = (e) => {

        // grab the selected friend's id
        let id = e.target.id;

        // init variable that sees if the user selects a friend that's already in selectedFriends
        let exists = false;

        // loop through selected friends and see if any ids match selected id
        this.state.selectedFriends.forEach(friend => {

            // if id matches
            if (friend.id == id) {
 
                // change exists to true
                exists = true;
            }
        })

        // if exists is true
        if (exists) {
            // end the game
            this.endGame();
        }

        // otherwise
        else {
            // loop through the friend json
            this.state.friends.forEach(friend => {
                // if the friend id matches the selected id
                if (friend.id == id) {
                    // add the friend to the selected friend array
                    this.setState({selectedFriends: [...this.state.selectedFriends, friend]});
                    console.log(this.state.selectedFriends);

                    // update the score
                    this.updateScore();
                }
            })  
        }
        

        // SHUFFLE THE FRIENDS
        this.setState({ friends: shuffle(this.state.friends)});
        console.log("Shuffling Friends");

    }

    // function to update the current game's score
    updateScore = () => {
        // set the new score
        this.setState({score: this.state.score + 1});
        // update the parent component's display
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    // function to end the game
    endGame = () => {
        console.log("End!");
        // push the current game score as the new top score 
        this.props.updateTopScore(this.state.score);
        // set the score back to 1 and the selected array to empty 
        this.setState({score: 1, selectedFriends: []});
        // update the current score to 0
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