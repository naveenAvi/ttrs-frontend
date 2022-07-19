import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import "./App.css";
import NormalUserDash from "./Layout/NormalUserDash";
import History from "./UserPages/History/History";
import AdminDash from "./Layout-admin/AdminDash";
import LayoutSelector from "./LayoutSelector";
import { Provider } from "react-redux";
import store from './store'

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <Provider store={store}>
      <Router>
        <LayoutSelector />





      </Router>
    </Provider>
  );
};

export default App;
