import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
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
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  // function for when user types into input field; onInputChange
  // is regular vanilla JS fn that takes in event as a param
  onInputChange(event) {
    console.log(event.target.value);
    // need to setState to update the input form when
    // user types into input b/c above its set to empty string
    this.setState({ term: event.target.value });
  }



  onFormSubmit(event) {
    // tells browser not to submit
    // the form by default. when user clicks Submit
    // button, this fn will be triggered
    event.preventDefault();
    // we need to fetch weather data here
    // 'this' refers to the SearchBar context of 'this' b/c
    // we bound it above with the bind(this). then we call
    // our fetchWeather container to talk to the api, and
    // we pass it what the user will type into the search
    // input which is this.state.term
    this.props.fetchWeather(this.state.term);
    // we clear out the search input after user clicks 
    // submit
    this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
