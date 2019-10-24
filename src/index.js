import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( 
    <Fragment>
        <CssBaseline />
        <BrowserRouter basename="/salary-taxes/build">
            <App />
        </BrowserRouter>
    </Fragment>,        
    document.getElementById('root'));
