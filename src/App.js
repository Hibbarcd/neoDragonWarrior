import React, { Component } from 'react';
// import Wrapper from "./features/wrapper/index";
import World from './features/world';
import PartyMenu from './features/partyStatusMenu/index';
import GlobalAudio from './features/music';
// import BattleMenuDisplay from './features/TestTransBattleScreen/battleMenuTest/index'
import SaveBtn from './features/saveButton/saveState';

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
        <div>
            {/* <BattleMenuDisplay /> */}
        </div>
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
