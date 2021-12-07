import './App.css';
import Routers from './Routers';
import {Provider} from 'react-redux';
import store from './redux/store';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:8000/"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Routers />
      </Provider>
    </div>
  );
}

export default App;
