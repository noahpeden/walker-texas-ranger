import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import '../styles';
import Header from './Header/Header';
import InputArea from './Main/inputArea';



class Home extends React.Component{
  constructor(){
  super()
  this.state = {
    jokes: [],
    randomJoke: '',
    jokesNum: '',
    }
  }

  handleChange(e){
    this.setState({
      jokesNum: e.target.value,
    })
  }

  jokesCheck() {
      let display = this.state.jokes.map((joke)=> {
        return <li className='joke' key={joke.id}>{joke.joke}</li>
      })
      return display;
  }

  getNewJokes(){
    const jokeURL = `http://api.icndb.com/jokes/random/${this.state.jokesNum}/?escape=javascript`
    fetch(jokeURL)
          .then((response)=>{
              return response.json()})
          .then((data)=> {
      this.setState({ jokes: data.value })
    })
  }

  componentDidMount(){
    const randomJokeURL = 'http://api.icndb.com/jokes/random/?escape=javascript'
    fetch(randomJokeURL).then((response)=>{
      return response.json()
    }).then((data)=> {
      this.setState({ randomJoke: data.value.joke })
    })
  }
    render(){
      return(
        <div>
        <Header />
        <div className="random-joke">{this.state.randomJoke}</div>
        <InputArea
          handleChange={this.handleChange.bind(this)}           jokesNum={this.state.jokesNum}
          getNewJokes={this.getNewJokes.bind(this)}
        />
        <ul>{this.jokesCheck()}</ul>
        </div>
      )
    }
  }



  export default Home;
