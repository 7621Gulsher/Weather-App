import { kelvinToCelsius } from "./func";

interface WeatherProps {
  data: any;
}

const Weather = ({ data }: WeatherProps) => {
  return (
    <div className="weather-box">
      
      <div className="weather-icon">
        <img
          className="icon-img"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <h3 className="icon-description">{data.weather[0].main}</h3>
      </div>
      <div className="temperature">
        <h2 className="temp">{kelvinToCelsius(data.main.temp)}º C</h2>
      </div>
      <div className="location">
        <h3 className="location-name">
          {data.name}, {data.sys.country}
        </h3>
      </div>
    </div>
  );
};

export default Weather;
