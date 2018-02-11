import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location) {
    const that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location)
      .then((temp) => {
        that.setState( { location, temp, isLoading: false } );
      }, (error) => {
        alert(error);
        this.setState({isLoading: false});
      });
  },
  render: function() {
    const {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

export default Weather;
