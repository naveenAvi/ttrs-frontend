import classNames from 'classnames';
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Schedules from '../Admin-pages/Schedules/Schedules';
import StationList from '../Admin-pages/StationList/StationList';
import TrainsList from '../Admin-pages/TrainsList/TrainsList';
import Topbar from '../components/content/Topbar';
import BookNew from '../UserPages/book-new/BookNew';
import History from '../UserPages/History/History';
import SideBar from './SideBar';

export default function AdminDash({ children }) {
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
                    <Route exact path="/admin-d/stations-fairs" component={StationList} />
                    <Route exact path="/admin-d/train-list" component={TrainsList} />
                    <Route exact path="/book-new" component={BookNew} />
                    <Route exact path="/admin-d/schedules" component={Schedules} />
                    
                    
                </Switch>
                
            </Container>
        </div>
    )
}
