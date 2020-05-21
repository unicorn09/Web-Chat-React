import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './Component/Join/Join';
import Chat from './Component/Chat/Chat';

const App=()=>(
    <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/Chat" exact component={Chat}/>
    </Router>
    
);
export default App;