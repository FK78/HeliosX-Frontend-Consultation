import "./index.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer className="footer">
        <div className="firstColumn">
          <ul>
            <h2 className="firstColumnHeader">Treatments</h2>
            <li>Erectile Dysfunction</li>
            <li>Weight Loss</li>
            <li>Migraine</li>
            <li>Period Delay</li>
            <li>Asthma</li>
            <li>Stop Smoking</li>
          </ul>
        </div>
        <div className="secondColumn">
          <ul>
            <h2 className="secondColumnHeader">Useful Links</h2>
            <li>Information</li>
            <li>FAQs</li>
            <li>Delivery</li>
            <li>About us</li>
            <li>Referral scheme</li>
            <li>Complaints</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
