import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Add this import statement

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="getintouch">GET IN TOUCH</div>
            <div className="icons">
                <span className="github"><i class="fa-brands fa-github"></i></span>
                <span className="linkedin"><i class="fa-brands fa-linkedin"></i></span>
                <span className="gmail"><i class="fa-solid fa-envelope"></i></span>
            </div>
            <div className="creator">Created and Designed by Aayush Yadav</div>
            <hr className="line"/>
            <div className="copyright">Copyright © 2023. All Rights Reserved.</div>
        </div>
    );
}
 
export default Footer;