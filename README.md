# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
This app displays countries from a local `data.json` file, allows searching and filtering, and includes a country details page with border-country navigation.

##  Features

- **Light / Dark theme switcher**
  - Theme is saved in `localStorage`
  - Theme is applied via `data-theme` on the root element

- **Countries list page**
  - Country cards with:
    - flag
    - name
    - population
    - region
    - capital

- **Search by country name**
- **Filter by region**
- **"See more" pagination**
- **Scroll-to-top button**
- **Country details page**
- **Responsive layout**

---

##  Tech Stack

- **React** (Vite)
- **React Router DOM**
- **SCSS (Sass)**
- **Local JSON data** (`src/data.json`)

---

## 📁 Project Structure

```bash
src/
  assets/
    images/
      arrow-up.svg
      moon.svg
      sun-2.svg

  components/
    Header.jsx
    Controls.jsx
    CountryCard.jsx
    Footer.jsx

  pages/
    Home.jsx
    Details.jsx

  styles/
    _variables.scss
    _theme.scss
    _base.scss
    _home.scss
    _details.scss
    _footer.scss
    styles.scss

  data.json
  utils.js
  App.jsx
  main.jsx
```

## Author

- GitHub: [p3lm3shka1](https://github.com/p3lm3shka1)
- Frontend Mentor [p3lm3shka1](https://www.frontendmentor.io/profile/p3lm3shka1)
