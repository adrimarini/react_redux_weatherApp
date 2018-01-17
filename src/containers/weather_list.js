import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  // the param cityData is a particular obj in weather array
  // (redux state) that contains a cities data (can call whatevr we want but this makes clear)
  renderWeather(cityData){
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    )
  }
  // line 9: whenever we have a list we need to provide a unique 'key' property
  // the 'key' just needs to be a unique piece of data
  // line 10: cityData points to one object in the 'weather' array
  // and we drill down into the object to get what we need to display

  render () {
    return (
      <table className="table table-hover">
      <thead>
        <tr>
          <th> City </th>
          <th> Temperature </th>
          <th> Weather </th>
          <th> Humidity </th>
        </tr>
      </thead>
      <tbody>
        { this.props.weather.map(this.renderWeather) }
      </tbody>
      </table>
    );
  }
}

// line 31: curly brace { this.props.weather.map(this.renderWeather) }
// allows access to a javascript variable
// 'weather' is the array of objects in Redux State so
// mapping over the array will get 1 city per row

function mapStateToProps(state) {
  // we use state.weather here b/c in reducers/index.js
  // in the root reducer we assign weather: to the
  // WeatherReducer
  return { weather: state.weather };
  // ES6 syntax for above:
  // function mapStateToProps({ weather }) {
  // return { weather }; }
  // the curly brace { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
// once you add this export statement above, you no longer
// need the WeatherList component to export default b/c
// now we are exporting the connected WeatherList, so remember
// to remove that from above once this statement is added
