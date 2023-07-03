import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

const App = () => {

  const location = useLocation();

    //if there is an id then we know we are editing an existing activity
   /* activity.id 
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])    //add all the other activities to array, including the update one. 
                                                                                      //Old one with the given id will be replaced with new data
      : setActivities([...activities, {...activity, id:uuid()}])                                      //add all other activities to array and the new one

      setEditMode(false)
      setSelectedActivity(activity)*/

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{marginTop: "7em"}}>
            <Outlet />
          </Container>
        </>
      )}
    
    </>
  );
}

export default observer(App);
