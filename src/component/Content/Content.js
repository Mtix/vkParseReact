import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import TopAppBar from '../TopAppBar/TopAppBar';

class Content extends Component {
    render() {
        return (
            <div className="content-right">
                <TopAppBar/>
                    <Switch className="content-wrapper">
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                    </Switch>
            </div>
        )
    }
}

export default Content;