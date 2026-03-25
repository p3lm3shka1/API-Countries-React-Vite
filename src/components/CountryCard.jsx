import { Link } from "react-router-dom";
import { formatPopulation } from "../utils.js";

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.alpha3Code}`} className="card">
      <img src={country.flags.png} alt={country.name} />
      <div className="card__body">
        <h3>{country.name}</h3>
        <p>
          <strong>Population:</strong> {formatPopulation(country.population)}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital || "—"}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
