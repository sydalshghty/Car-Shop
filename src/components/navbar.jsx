import imgToyota from "../assets/l-1669878465.8496-638852c1cf6f3 (2).webp";
import imgKia from "../assets/l-1669878484.7524-638852d4b7b24 (1).webp";
import imgHuanta from "../assets/l-1669878510.9276-638852eee2747 (1).webp";
import imgNissan from "../assets/l-1669878674.042-638853920a43c.webp";
import imgAmg from "../assets/l-1669878687.1593-6388539f26e4e.webp";
import imgChery from "../assets/l-1678610317.8179-640d8f8dc7acf.webp";
import "../css/navbar.css";

function Navbar() {
    return(
        <div className="navbar-content">
            <div className="container">
                <div className="col-toyota">
                    <img src={imgToyota} alt="Toyota-img" />
                    <a href="#">تويوتا</a>
                </div>
                <div className="col-kia">
                    <img src={imgKia} alt="kia-img" />
                    <a href="#">كيا</a>
                </div>
                <div className="col-huanta">
                    <img src={imgHuanta} alt="huanta-img" />
                    <a href="#">هيونداي</a>
                </div>
                <div className="col-nissan">
                    <img src={imgNissan} alt="nissan-img" />
                    <a href="#">نيسان</a>
                </div>
                <div className="col-Amg">
                    <img src={imgAmg} alt="Amg-img" />
                    <a href="#">ام جي</a>
                </div>
                <div className="col-Chery">
                    <img src={imgChery} alt="chery-img" />
                    <a href="#">شيري</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;