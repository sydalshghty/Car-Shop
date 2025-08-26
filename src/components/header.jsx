import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import "../css/header.css"
import { FaBars } from "react-icons/fa6";
import NavbarMobile from "./navbar-mobile";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
function Header() {
    const [ showNav, setshowNav ] = useState(true);

    return(
        <>
            <div className="header-departament">
                <div className="container">
                    <div className="col-social-media">
                        <div className="col-link">
                            <Link to={"#"} className="link">
                                <FaFacebookF className="icon-social"/>
                            </Link>
                        </div>
                        <div className="col-link">
                            <Link to={"#"} className="link">
                                <FaTwitter  className="icon-social"/>
                            </Link>
                        </div>
                        <div className="col-link">
                            <Link to={"#"} className="link">
                                <FaWhatsapp  className="icon-social"/>
                            </Link>
                        </div>
                        <div className="col-link">
                            <Link to={"#"} className="link">
                                <FaYoutube  className="icon-social"/>
                            </Link>
                        </div>
                        <div className="col-link">
                            <Link to={"#"} className="link">
                                <FaTiktok  className="icon-social"/>
                            </Link>
                        </div>
                        <div className="col-link">
                            <Link to={"#"} className="link">
                                <FaInstagram  className="icon-social"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-email-phone">
                        <div className="col-email">
                            <Link to={"#"} className="link-email">emddad.ksa@gmail.com</Link>
                            <TfiEmail  className="email-icon"/>
                        </div>
                        <div className="col-phone">
                            <p>966554769037+</p>
                            <LuPhone  className="phone-icon"/>
                        </div>
                        {showNav ? 
                            <FaBars className="bars-icon" onClick={() => {
                                setshowNav(false);
                            }}/>
                            :
                            <FaXmark className="bars-icon" onClick={() => {
                                setshowNav(true)
                            }}/>
                        }
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 h-full bg-amber-400 navbar-mobile ${showNav ? "" : "show"}`}>
                <NavbarMobile/>
            </div>
        </>
    )
}
export default Header;