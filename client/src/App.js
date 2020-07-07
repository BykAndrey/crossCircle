import React from 'react';
import {AppContextProvider} from './AppContext';
import Layout from './components/Layout';
import SocketServerApi  from './Socket/socket-api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contextValue: {
          userID: null
      }
    }
  }
  componentDidMount() {
    SocketServerApi.createUser().then(userID => {
      this.setState({
        contextValue:{
          ...this.state.contextValue,
          userID: userID
        }
      })
    })
  } 


  render() {
    return (
      <AppContextProvider value={this.state.contextValue}>
        <div className="App">
          <Layout />
        </div>
      </AppContextProvider>
    );
  }
 
}

export default App;
