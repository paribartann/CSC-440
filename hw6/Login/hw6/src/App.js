import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpComponent from './components/signup';
import {IntlProvider} from 'react-intl';


function App() {
  return (
    <IntlProvider locale="en">
      <div>
        <SignUpComponent />
      </div>
    </IntlProvider>
  );
}

export default App;
