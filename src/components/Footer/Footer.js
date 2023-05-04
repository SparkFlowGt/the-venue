import { Fade } from "react-awesome-reveal";

const Footer = () =>{
    return(
        <footer className="bck_red">
            <Fade triggerOnce>
            <div className="font_righteous footer_logo_venue">The PreciousTickets</div>
                <div className="footer_copyright">The PreciousTickets 2023 </div>
            </Fade>
        </footer>
    )
    }

    export default Footer;