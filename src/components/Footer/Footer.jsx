import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/category-02.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Pizza Bliss</h5>
        <p>Best Pizzas in Tangier, try it out!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Monday - Friday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Saturday - Sunday</span>
            <p>Off day</p>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
