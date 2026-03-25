import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";

function Header({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="header">
      <div className="container header__inner">
        <h1>Where in the world?</h1>

        <button className="theme-btn" onClick={onToggleTheme}>
          <img
            src={isDark ? sun : moon}
            alt="icons"
            className="theme-btn__icon"
          />
          <span>{isDark ? "Light mode" : "Dark mode"}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
