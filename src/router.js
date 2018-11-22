
import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

import ShareIndex from './page/share/invite';
import GotBagIndex from './page/share';
import ShareDownloadIndex from './component/share/download';
import "react-flexible";
import "./static/css/base.scss";
import HelpUserIndex from "./page/help";




class RootRouter extends Component {
    
    render() {
        return (
     
            <Switch>

                <Route exact path="/app/help/user" component={HelpUserIndex} />
                <Route exact path="/app/share" component={ShareIndex} />
                <Route exact path="/share/index" component={GotBagIndex} />
                {/*<Route exact path="/share/form" component={ShareFormIndex} />*/}
                <Route exact path="/share/download" component={ShareDownloadIndex} />
                
            </Switch>
        
        );
    }
}

export default RootRouter;