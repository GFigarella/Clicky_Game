import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  //Set initial state to the array we imported
  state = {
    // friends: friends, we can skip this syntax, since react knows that you're settings friends to friends if you just put it once.
    friends
  }
  //TODO: removeCard method
  removeCard = id => {
    //get all the friends whose ids are NOT equal to the friend whose red x was clicked
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends})
  }

  //function that adds a point if an image was clicked
  myGuess = id => {
    //get all the friends whose ids are NOT equal to the friend whose red x was clicked
    const guess = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends})
  }


  render(){
    //Return the element to the UI
    return ( 
      <div>
        <Navbar/>
        <Wrapper>
          {/* <h1 className="title">Friends List</h1> */}
          {this.state.friends.map(friend =>(
            <FriendCard
            className = "list-group-item"
            key={friend.id} //we need this line for the map function to know which element we're looping on
            removeCard={this.removeCard}
            name={friend.name}
            id={friend.id}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            />
          ))}
        </Wrapper>
      </div>
    )//return ends here
  }//render ends here
};

export default App;
