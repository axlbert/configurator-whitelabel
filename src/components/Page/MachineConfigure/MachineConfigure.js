import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './MachineConfigure.css';
import Sidebar from '../../Sidebar/Sidebar';
import ConfigureFlow from '../../ConfigureFlow/ConfigureFlow';
import SuspensionSelection from './SuspensionSelection/SuspensionSelection';
import TrailerSelection from './TrailerSelection/TrailerSelection';

class MachineConfigure extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router>
                <div className="d-flex">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/machine-configure">
                            <TrailerSelection />
                        </Route>
                        <Route path="/machine-configure/suspension">
                           <SuspensionSelection />
                        </Route>
                    </Switch>
                </div>
                <ConfigureFlow />
            </Router>
        );
    }
}

export default MachineConfigure;
