import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import './App.css';
 
class App extends Component {
 
  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }
 
  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};
 
// we are providing a new prop called items, so in our App component, that is the prop we want to reference.
const mapStateToProps = (state) => {
  return { items: state.items };
};
 
export default connect(mapStateToProps)(App);