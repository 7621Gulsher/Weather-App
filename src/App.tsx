import "./App.css";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Loading from "./Loading";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  const [data, setData] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [city, setCity] = useState<string>("");
  const [retreivng, setRetreiving] = useState<boolean>(false);

  const getData = async (country: string) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=b9f5605a7733153afab3bf015488d271`
      );
      if (res.ok) {
        const data = await res.json();
        setData(data);
      } else {
        // Handle error here
      }
    } catch (error) {
      // Handle fetch error here
    } finally {
      setRetreiving(false);
    }
  };

  const getForecast = async (country: string) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=b9f5605a7733153afab3bf015488d271`
      );
      if (res.ok) {
        const data = await res.json();
        setForecast(data);
      } else {
        // Handle error here
      }
    } catch (error) {
      // Handle fetch error here
    } finally {
      setRetreiving(false);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      setRetreiving(true);
    }
  };

  useEffect(() => {
    if (retreivng) {
      getData(city);
      getForecast(city);
    }
  }, [retreivng]);

  return (
    <main>
      <div className="wrap">
        <div className="search">
          <input
            onChange={(e: any) => setCity(e.target.value)}
            type="text"
            className="searchTerm"
            placeholder="Enter City"
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={() => setRetreiving(true)}
            type="submit"
            className="searchButton"
          >
            <i className="fa-search">
              <CiSearch />
            </i>
          </button>
        </div>
      </div>
      {retreivng ? (
        <Loading />
      ) : (
        <div className="weather">
          {data && forecast && (
            <>
              {" "}
              <Weather data={data} />
              <Forecast data={forecast.list} />
            </>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
