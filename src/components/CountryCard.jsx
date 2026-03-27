import { Link } from "react-router-dom";
import { useState } from "react";
import { formatPopulation } from "../utils";

export default function CountryCard({ country }) {
  const primary = country?.flags?.png || country?.flags?.svg || "";
  const secondary = country?.flags?.svg || country?.flags?.png || "";
  const [src, setSrc] = useState(primary);

  return (
    <Link to={`/country/${country.alpha3Code}`} className="card">
      <img
        src={src}
        alt={country.name}
        onError={() => {
          setSrc((prev) => (prev !== secondary && secondary ? secondary : ""));
        }}
      />

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
