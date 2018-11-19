
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import ShareIndex from './page/share/invite';
import GotBagIndex from './page/share';
import ShareFormIndex from './page/share/form';
import ShareDownloadIndex from './page/share/download';
import "react-flexible";




class RootRouter extends Component {
    
    render() {
        return (
            <Switch>
                <Route exact path="/app/share" component={ShareIndex} />
                <Route exact path="/" component={GotBagIndex} />
                <Route exact path="/share/form" component={ShareFormIndex} />
                <Route exact path="/share/download" component={ShareDownloadIndex} />
            </Switch>
        );
    }
}

export default RootRouter;