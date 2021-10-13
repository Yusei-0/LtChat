import './App.css';
import Chat from '../components/Chat';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LogIn from './LogIn';

function App() {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route exact path="/chat" component={Chat}/>
      </Switch>
    </BrowserRouter>  
  )

}

export default App;
