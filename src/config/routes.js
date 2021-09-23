
import {Route, Switch, Link, BrowserRouter  as  Router } from  'react-router-dom';
import Home from  '../components/Home';
import About from  '../components/About';
import TaskList from  '../components/TaskList';
import NotFound from  '../components/NotFound';


const  routing  = (
    <Router>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/tasks"> Tasks </Link>       
      </div> 
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tasks" component={TaskList} />
            <Route path="/task/:id/:action" component={About} />
            <Route path="/about" component={About} />
            <Route path="**" component={NotFound} />
        </Switch>
    </Router>
)

export default routing;