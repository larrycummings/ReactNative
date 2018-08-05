import React from 'react';
import EventList from "./EventList";
import EventForm from "./EventForm";
import { createStackNavigator } from "react-navigation";


export default createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Larry's Event List"
    })
  }, 
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Event Form"
    })
  }
});


