import DesignImg from "../images/design-img.png";

export default function Info() {
  return (
    <div className="info">
      <div className="image-container">
        <img src={DesignImg} alt="girl image" />
      </div>
      <h2>Laura Smith</h2>
      <p>Frontend Developer</p>
      <a href="#">laurasmith.website</a>
    </div>
  );
}
