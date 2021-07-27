
import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent'
import './App.css';
import {DISHES} from './shared/dishes'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES
    }
  }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
