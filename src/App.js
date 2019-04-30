import React, { Component } from 'react';
import World from './features/world';
import PartyMenu from './features/worldMenu/index';
import BattleMenu from './features/battleMenu/index';

class App extends Component {
  render() {
    return (
      <div>
          <World />
          <BattleMenu 
          >First Page 
           </BattleMenu>
          <PartyMenu />
      </div>
    );
  }
}

export default App;
