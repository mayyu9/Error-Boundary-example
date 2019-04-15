import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BuggyComponent from './component/BuggyComponent';
import NotBuggyComponent from './component/NotBuggyComponent';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  render() {
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };
    return (
      <div  style={styles}>
        <h2>Error Boundaries Example</h2>
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>

          {/* it is better to wrap the individual components in their respective ErrorBoundary
          it will prevent from crashing the whole app. this way only crashed part of the App
          will be not available for the user and rest will be accesible.  */}

        <ErrorBoundary>
          <NotBuggyComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
