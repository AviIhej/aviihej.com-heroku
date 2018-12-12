import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <HttpsRedirect><App /></HttpsRedirect>, document.getElementById('root'));

registerServiceWorker();
