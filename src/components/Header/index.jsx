import "./index.css";
import mainLogo from "../../assets/me_blue_logo.png";
import mobileLogo from "../../assets/me_mobile_logo.png"

const Header = () => {
  return (
    <div className="header-container">
      <picture className="logoWrapper">
        <source
          media="(min-width: 900px)"
          srcSet={mainLogo}
        />
        <img className="mobile-brand-logo" src={mobileLogo}/>
      </picture>
    </div>
  );
};

export default Header;