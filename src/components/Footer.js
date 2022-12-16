import logoFooter from "../assets/LOGO-White.png";

export default function Footer() {
  return (
    <div className="footer-flex wrapper">
      <img src={logoFooter} alt="logo kasa" />
      <p>
        <i class="fa-regular fa-copyright"></i> 2020 Kasa. All rigths reserved
      </p>
    </div>
  );
}
