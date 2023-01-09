import logoFooter from "../assets/LOGO-White.png";

export default function Footer() {
  return (
    <div className="footer-flex wrapper">
      <img src={logoFooter} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
