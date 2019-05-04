import React, { Component } from 'react';
// import Wrapper from "./features/wrapper/index";
import World from './features/world';
import PartyMenu from './features/worldMenu/index';
import BattleScreen from './features/battleScreen/index';

//below can be imported as whole from battleScreen when completed
import BattleMenu from './features/battleScreen/battleMenu/index';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
          <World />
          <BattleScreen />
          <BattleMenu />
          <PartyMenu />
      </div>
    );
  }
}

export default App;
