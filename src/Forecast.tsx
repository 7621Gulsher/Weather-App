import { kelvinToCelsius } from "./func";

interface ForecastProps {
  data: any;
}

const Forecast = ({ data }: ForecastProps) => {
  let date = "";
  return (
    <div className="forecast-box">
      {data.map((item: any) => {
        let Ndate = item.dt_txt.split(" ")[0];
        if (Ndate !== date) {
          date = Ndate;
          return (
            <div className="forecast-item">
              <p>{Ndate}</p>
              <img
                className="weather-icon2"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
              <div className="weather-details">
                <p className="weather-description">{item.weather[0].main}</p>
                <p className="temperature2">
                  {kelvinToCelsius(item.main.temp)}º C
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Forecast;
