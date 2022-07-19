import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <div style={{ width: "100%" }} className="p-2">
      <Navbar
        color="light"
        light
        className="navbar shadow-sm p-3 mb-1 bg-white rounded"
        expand="md"
      >
        <Button color="info" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <NavbarToggler onClick={toggleTopbar} />
        <Collapse isOpen={topbarIsOpen} navbar>
          avatar
        </Collapse>
      </Navbar>

    </div>
  );
};

export default Topbar;
