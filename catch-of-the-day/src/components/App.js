import React from 'react';
// import Header from './Header';
import Header2 from './Header2';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
        <Header2 tagline="Fresh Seafood Market" age={500} cool={true} />
        </div>
        <Inventory />
        <Order />
      </div>
    );
  };        
}

export default App;
