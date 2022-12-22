import logoFooter from "../assets/LOGO-White.png";

export default function Footer() {
  return (
    <div className="footer-flex wrapper">
      <img src={logoFooter} alt="logo kasa" />
      <div className="copyright">
        <span className="copyright_c">c</span>
        <p>2020 Kasa. All rigths reserved</p>
      </div>
    </div>
  );
}
