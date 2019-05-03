import React, { Component } from 'react';
import World from './features/world';
import PartyMenu from './features/worldMenu/index';
import BattleScreen from './features/battleScreen/index';

//below can be imported as whole from battleScreen when completed
// import BattleMenu from './features/battleMenu/index';

class App extends Component {
  render() {
    return (
      <div>
          <World />
          <BattleScreen />
          {/* <BattleMenu /> */}
          <PartyMenu />
      </div>
    );
  }
}

export default App;
