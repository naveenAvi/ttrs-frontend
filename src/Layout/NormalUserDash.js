import classNames from 'classnames';
import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import Topbar from '../components/content/Topbar';
import SideBar from '../components/sidebar/SideBar';
import BookNew from '../UserPages/book-new/BookNew';
import History from '../UserPages/History/History';

export default function NormalUserDash({ children }) {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    
    return (
        <div className="App wrapper">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Container
                fluid
                className={classNames("content", { "is-open": sidebarIsOpen })}
            >
                
                <Topbar toggleSidebar={toggleSidebar} />
                <Switch>
                    <Route exact path="/" component={History} />
                    <Route exact path="/history" component={History} />
                    <Route exact path="/book-new" component={BookNew} />

                    
                </Switch>
                
            </Container>
        </div>
    )
}
