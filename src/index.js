import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/app/App';

ReactDOM.render( 
    <Fragment>
        <CssBaseline />
        <App />
    </Fragment>,        
    document.getElementById('root'));
