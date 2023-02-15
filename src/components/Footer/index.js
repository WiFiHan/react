import "./Footer.css";
import logo from "../../assets/images/logo.png";
const Footer = () => {
    return (
        <footer>
            <div className="copyright-container">
                <img class="logo" src={logo} alt="logo"></img>
                <span id="copyright-text" class="copyright">SNU LION 2023</span>
            </div>
        </footer>
    )
}

export default Footer;