import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {
  const [activities, setActivities] = useState([0]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data);
    })
},[])// will only load once

  return (
    <div>
   <Header as='h2' icon='users' content='Reactivities'/>
        <img src={logo} className="App-logo" alt="logo" />
    <List>
      {activities.map((activity: any, index) =>(
      <List.Item key = {index}>
        {activity.title}

      </List.Item>
      
      ))}
    </List>
  
    </div>
  ); 
}

export default App;
