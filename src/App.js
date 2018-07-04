import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Content from './component/Content/Content';
import SideBar from './component/SideBar/SideBar';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div className="router-wrapper">
                        <SideBar/>
                        <Content/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
