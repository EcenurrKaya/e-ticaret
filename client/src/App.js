import './App.css';
import {createBrowserRouter,RouterProvider,Route,Link,Router,Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    );
}

function Home(){
  return <h2>About</h2>;
}

export default App;
