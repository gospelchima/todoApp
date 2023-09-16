import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function CountryCard() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   console.log(countries);
  return (
    <div className="country-card-container" style={{}}>
      {countries.map((country) => (
        <div className="country-card" key={country.cca3}>
          <img src={country.flags.png} alt={country.name.common} />
          <h2>{country.name.common}</h2>

          {country?.independent ? (
            <p className="">Independent</p>
          ) : (
            <p className="">Not Independent</p>
          )}
          <p>Continent: {country.region}</p>
        </div>
      ))}
    </div>
  );
}

export default CountryCard;
