import {Route ,Switch} from 'react';
import Home from './components/Home';
import LoginForm from "./components/LoginForm";

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Home} />
      <Route exact path="/" component={LoginForm} />
     </Switch> 
  </>
)
export default App
