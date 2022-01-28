import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
      <Route path='/' exact render={(props)=>(
        <>
        <Banner {...props}/>
        <Movies {...props}/>
        </>
      )} />
      <Route path='/favourites' component={Favourite} />
      </Switch>
      {/* <Banner/> */}
      {/* <Movies/> */}
      {/* <Favourite/> */}
    </Router>
    </>
  );
}

export default App;
