import React, { Component } from 'react';
// import Wrapper from "./features/wrapper/index";
import World from './features/world';
import PartyMenu from './features/partyStatusMenu/index';
import BattleScreen from './features/battleScreen/index';
import GlobalAudio from './features/music';

//below can be imported as whole from battleScreen when completed
import BattleMenu from './features/battleScreen/battleMenu/index';


class App extends Component {
  
  render() {

    return (
      <div className='wrapper'>
          {/* <GlobalAudio/> */}
          <World />
          <BattleScreen />
          <BattleMenu />
          <PartyMenu />
      </div>
    );
  }
}

export default App;
