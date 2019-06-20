import React, { Component } from 'react';
// import Wrapper from "./features/wrapper/index";
import World from './features/world';
import PartyMenu from './features/partyStatusMenu/index';
import GlobalAudio from './features/music';
import SaveBtn from './features/saveButton/saveState';
//below can be imported as whole from battleScreen when testing is completed
// import BattleMenu from './features/battleScreen/battleMenu/index';
import BattleMenuTest from './features/TestTransBattleScreen/battleMenuTest/index'
// import BattleScreenTest from './features/TestTransBattleScreen/index'
// import API from './utils/API';
// import User from './utils/User';

class App extends Component {
  //===============================experimental code block============
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      email: null
    };
  }
//============================end experimental code block================
  render() {
    return (
      <div className='wrapper'>
          <GlobalAudio/>
          {/* <User name="Jessica Doe" email="hello@jessica.com" />; */}
        <div className='worldMap visible'>
            <World />
        </div>
            {/* <BattleScreen /> */}
            <BattleMenuTest />
            {/* <BattleMenu /> */}
            <PartyMenu />
            <SaveBtn />
      </div>     
    );    
  }
  async componentDidMount() {
    // Load async data.
    // Update state with new data.
    // Re-render our component.
  }
}

export default App;
