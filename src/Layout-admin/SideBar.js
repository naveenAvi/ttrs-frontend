import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";


const SideBar = ({ isOpen, toggle }) => (

  <div className={classNames("sidebar", { "is-open": isOpen })} style={{ backgroundColor:"#8100ff" }}>
    <div className="sidebar-header">
      <span color="warning" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>TTRS - Admin</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem style={{ marginTop:"20px", fontSize:"20px" }}>
          <Link to={"/admin-d/train-list"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Trains List
          </Link>
        </NavItem>
        <NavItem style={{ marginTop:"20px", fontSize:"20px" }}>
          <Link to={"/admin-d/stations-fairs"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Fairs and stations
          </Link>
        </NavItem>
        <NavItem style={{ marginTop:"20px", fontSize:"20px" }}>
          <Link to={"/admin-d/schedules"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Train schedules
          </Link>
        </NavItem>
        <NavItem style={{ marginTop:"20px", fontSize:"20px" }}>
          <Link to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            Seat Extends
          </Link>
        </NavItem>
        <NavItem style={{ marginTop:"20px", fontSize:"20px" }}>
          <Link to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            Reserved Tickets
          </Link>
        </NavItem>
        <NavItem style={{ marginTop:"20px", fontSize:"20px" }}>
          <Link to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </Link>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
