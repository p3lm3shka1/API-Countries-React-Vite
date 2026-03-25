import { useState } from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Controls({ searchTerm, setSearchTerm, region, setRegion }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="controls">
      <div className="search">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter">
        <button className="filter__trigger" onClick={() => setOpen((s) => !s)}>
          <span>{region || "Filter by Region"}</span>
          <span>⌄</span>
        </button>

        {open && (
          <ul className="filter__menu">
            {regions.map((r) => (
              <li key={r}>
                <button
                  onClick={() => {
                    setRegion(r);
                    setOpen(false);
                  }}
                >
                  {r}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setRegion("");
                  setOpen(false);
                }}
              >
                All regions
              </button>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default Controls;
