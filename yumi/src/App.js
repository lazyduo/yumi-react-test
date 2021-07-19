import Todo from './components/Todo';
import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';


function App() {
  // localhost:3000/
  // my-page.com/
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <div>
            <h1>My Todos</h1>
            <Todo text='Learn React' />
            <Todo text='master React'/>
            <Todo text='Explore the full React Course'/>
          </div>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
