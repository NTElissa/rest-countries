import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './CountryInfo.css';
export const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  const getCountryByName = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      setCountry(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCountryByName();
  }, []);

  return (
    <div className="country__info__wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>

      <div className="country__info__container">
        {country?.map((country, index) => (
          <div className="country__info__container" key={index}>

          
            <div className="country__info-img">

              <img src={country.flags.png} alt="" />
            </div>

            <div className="country__info">
              
              <h5>{country.name.common}</h5>
             
              <h5>Populaion :{country.population}</h5>
                <h5>
                  Region: <span>{country.region}</span>
                </h5>
                <h5>
                  Sub Region: <span>{country.subregion}</span>
                </h5>
                <h5>
                  Capital: <span>{country.capital}</span>
                </h5>
                <h5>
                  Borders: <span>{country.borders}</span>
                </h5>
                <h5>
                  Top Level Domain: <span>{country.tld}</span>
                </h5>
                <h5>
                  Currencies:{" "}
                  <span>
                    {country.currencies && country.currencies[0]?.name}
                  </span>
                </h5>
                <h5>
                  Languages:{" "}
                  <span>{country.languages && country.languages[0]?.name}</span>
                </h5>
                <h5>
                  Area: <span>{country.area}</span>
                </h5>
                <h5>
                  Timezones: <span>{country.timezones}</span>
                </h5>
                <h5>
                  Calling Codes: <span>{country.callingCodes}</span>
                </h5>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
