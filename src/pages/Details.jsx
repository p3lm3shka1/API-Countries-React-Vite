import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import countries from "../data.json";
import Header from "../components/Header";
import {
  formatPopulation,
  getCurrencies,
  getLanguages,
  getNativeName,
} from "../utils";

function Details() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const country = useMemo(
    () => countries.find((c) => c.alpha3Code === code),
    [code],
  );

  const borders = useMemo(() => {
    if (!country?.borders?.length) return [];
    return country.borders
      .map((b) => countries.find((c) => c.alpha3Code === b))
      .filter(Boolean);
  }, [country]);

  if (!country) {
    return (
      <div className="page">
        <Header
          theme={theme}
          onToggleTheme={() =>
            setTheme((p) => (p === "dark" ? "light" : "dark"))
          }
        />
        <main className="container main">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <p>Country not found.</p>
          <Link to="/">Go home</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
      />

      <main className="container details">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <section className="details__content">
          <img
            src={country.flags.png}
            alt={country.name}
            className="details__flag"
          />

          <div>
            <h2>{country.name}</h2>

            <div className="details__cols">
              <div>
                <p>
                  <strong>Native Name:</strong> {getNativeName(country)}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {formatPopulation(country.population)}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {country.subregion || "—"}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital || "—"}
                </p>
              </div>
              <div>
                <p>
                  <strong>Top Level Domain:</strong>{" "}
                  {country.topLevelDomain?.join(", ") || "—"}
                </p>
                <p>
                  <strong>Currencies:</strong> {getCurrencies(country)}
                </p>
                <p>
                  <strong>Languages:</strong> {getLanguages(country)}
                </p>
              </div>
            </div>

            <div className="borders">
              <strong>Border Countries:</strong>
              <div className="borders__list">
                {borders.length ? (
                  borders.map((b) => (
                    <Link
                      key={b.alpha3Code}
                      to={`/country/${b.alpha3Code}`}
                      className="pill"
                    >
                      {b.name}
                    </Link>
                  ))
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Details;
