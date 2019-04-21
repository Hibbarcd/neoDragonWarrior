import React, { Component } from 'react';
import World from './features/world';
import PartyMenu from './features/worldMenu/index';

class App extends Component {
  render() {
    return (
      <div>
          <World />
          <PartyMenu />
      </div>
    );
  }
}

export default App;
