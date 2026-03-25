export const formatPopulation = (n) =>
  typeof n === "number" ? n.toLocaleString("en-US") : "—";

export const getNativeName = (country) => {
  if (!country) return "—";

  if (typeof country.nativeName === "string") return country.nativeName;

  if (country.nativeName && typeof country.nativeName === "object") {
    if (country.nativeName.common) return country.nativeName.common;
    if (country.nativeName.official) return country.nativeName.official;
    const first = Object.values(country.nativeName)[0];
    if (typeof first === "string") return first;
    if (first?.common) return first.common;
    if (first?.official) return first.official;
  }

  if (country.name?.nativeName && typeof country.name.nativeName === "object") {
    const first = Object.values(country.name.nativeName)[0];
    if (first?.common) return first.common;
    if (first?.official) return first.official;
  }

  return "—";
};

export const getCurrencies = (country) => {
  const cur = country?.currencies;
  if (!cur) return "—";

  if (Array.isArray(cur)) {
    return (
      cur
        .map((c) => c?.name)
        .filter(Boolean)
        .join(", ") || "—"
    );
  }

  if (typeof cur === "object") {
    return (
      Object.values(cur)
        .map((c) => c?.name || c)
        .filter(Boolean)
        .join(", ") || "—"
    );
  }

  return "—";
};

export const getLanguages = (country) => {
  const lang = country?.languages;
  if (!lang) return "—";

  if (Array.isArray(lang)) {
    return (
      lang
        .map((l) => (typeof l === "string" ? l : l?.name || l?.nativeName))
        .filter(Boolean)
        .join(", ") || "—"
    );
  }

  if (typeof lang === "object") {
    return Object.values(lang).join(", ") || "—";
  }

  if (typeof lang === "string") return lang;

  return "—";
};
