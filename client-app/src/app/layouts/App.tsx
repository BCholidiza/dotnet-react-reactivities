import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

const App = () => {

  const {activityStore} = useStore();
  
  useEffect(() => {

    activityStore.loadActivities();
  }, [activityStore]);

    //if there is an id then we know we are editing an existing activity
   /* activity.id 
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])    //add all the other activities to array, including the update one. 
                                                                                      //Old one with the given id will be replaced with new data
      : setActivities([...activities, {...activity, id:uuid()}])                                      //add all other activities to array and the new one

      setEditMode(false)
      setSelectedActivity(activity)*/

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading App"/>

  return (
    <>
      <NavBar />
      <Container style={{marginTop: "7em"}}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
