import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBox from '../Components/SearchBox';
import VidList from '../Components/VidList';
import DisplayVid from '../Components/DisplayVid'
const API_KEY = 'yourAPIkey';
let myTarget;

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: 'lolz',
      videolist: [],
      myTarget: '',
      selectedId:''
    };
   /* this.onSearchChange = this.onSearchChange.bind(this);
   without arrow function*/
  }
  onSearchChange = event=> {
    myTarget = event.target.value;
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        type: 'video', part: 'snippet', q: myTarget
      }
    }
    )
    .then(response => this.setState({
      videolist: response.data.items,
      selectedId:''
    }));
    
    /*  or just fetch if you don't like axios...
    var url = new URL('https://www.googleapis.com/youtube/v3/search'),
        params = {key:API_KEY, type:'video', part:'snippet', q:'myTarget'}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).
    then(function(response) {
      return response.json();
    }). 
    then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
    */
  }
  myHandleClick = (event,myKey) =>{
    this.setState({selectedId: myKey})
  }
  render() {
    console.log(this.state.videolist);
    const state = this.state;
    return (
      <div className='App'>
        <h2>Basic YouTube API built as React exercise</h2>
        <SearchBox searchInp={this.onSearchChange} />
        <div className = 'container'>
        <DisplayVid id = {state.selectedId} video ={state.videolist[state.selectedId]}/>
        <div><VidList list={this.state.videolist} handle={this.myHandleClick}/></div>
        </div>
      </div>
    );
  }
}
export default App;
