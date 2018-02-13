import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  //Set initial state to the array we imported
  state = {
    // friends: friends, we can skip this syntax, since react knows that you're settings friends to friends if you just put it once.
    friends,
    myResult: " ",
    score: 0,
    topScore: 0,
    clickedImg: []
  }
  //TODO: removeCard method
  removeCard = id => {
    //get all the friends whose ids are NOT equal to the friend whose red x was clicked
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends})
  }

  // this.setState({
  //   arrayvar: [...this.state.arrayvar, newelement]
  // })
  
  //function that adds a point if an image was clicked
  myGuess = id => {
    if (this.state.clickedImg.indexOf(id) === -1){
      this.setState({ score: this.state.score + 1, myResult: "You guessed correctly!", clickedImg:[...this.state.clickedImg, id]});
    }
    else {
      this.setState({myResult: "You clicked that one already, you lost!"})
    } 
  }

  //reset function
  myReset = () => {
    this.setState({
      friends,
      myResult: "Click and Image to begin",
      score: 0,
      topScore: this.state.topScore
    })
  }

  //function to randomize the friends object, to shuffle the display
  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  //set the starting values for when the page loads for the 1st time
  componentDidMount () {
    this.myReset();
  }


  render(){
    const friend = this.shuffleArray(this.state.friends);
    //Return the element to the UI
    return ( 
      <div>
        <Navbar 
        score = {this.state.score}
        myGuess={this.myGuess}
        myResult={this.state.myResult}
        />
        <Header/>
        <Wrapper>
          {/* <h1 className="title">Friends List</h1> */}
          {this.state.friends.map(friend =>(
            <FriendCard
            className = "list-group-item"
            key={friend.id} //we need this line for the map function to know which element we're looping on
            removeCard={this.removeCard}
            myGuess={this.myGuess}
            id={friend.id}
            image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    )//return ends here
  }//render ends here
};

export default App;
