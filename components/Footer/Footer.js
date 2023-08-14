import Image from "next/image";
import Logo from '../../public/asset/images/cover-removebg-preview.png'
import { useSelector } from "react-redux";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content_wrapper">
        <div>
          <div>
            <Image src={ Logo} width={ 300} height={300} alt="Logo"/>
          </div>
        </div>
        <div>
          <h2 className="footer-content_title">Information</h2>
          <div>
            <ul>
              <li>
                <a href="">Custom Service</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">FAQs</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Ordering Tracking</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Events</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="footer-content_title">My Account</h2>
          <div>
            <ul>
              <li>
                <a href="">Delivery Information</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Discount</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Custom Service</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="footer-newsletter">Get Newsletter</h2>
          <p>Get on the list and get 10% off your first order!</p>
          <div className="mt-3">
            <input type="email" placeholder="Your Email" className="footer-newsletter_input" />
            <button className="footer-newsletter_btn">Subscript Now</button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2022 ©GadgetBazaar. All rights reserved. Powered by ©GadgetBazaar.</p>
      </div>
    </footer>
  );
};
export default Footer;
