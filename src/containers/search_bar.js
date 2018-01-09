import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    //initialize our state with this.state
    //value of the input will be mapped to term
    // and is blank string so its an empty input onload
    this.state = { term: '' };

    // bind with 'this' lets the inputChange know which
    // 'this' to refer to. At this level,'this' refers
    // to the instance of SearchBar, so we are saying
    // anywhere below where we refer to this.onInputChange
    // replace that value with SearchBar instance of this
    // by binding it
    this.onInputChange = this.onInputChange.bind(this);
  }


  // function for when user types into input field
  onInputChange(event) {
    console.log(event.target.value);
    // need to setState to update the input form when
    // user types into input b/c above its set to empty string
    this.setState({ term: event.target.value });
  }


  // function that tells browser not to submit
  // the form by default. when user clicks Submit
  // button, this fn will be triggered
  onFormSubmit(event) {
    event.preventDefault();

    // we need to fetch weather data here
  }

  render() {
    return (
      //className 'input-group' is bootstrap class; nothing special
      <form onSubmit= {this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forecase in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
