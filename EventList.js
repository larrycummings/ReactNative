import React, {Component} from "react";
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import EventCard from "./EventCard";
import ActionButton from "react-native-action-button";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#f3f3f3"
    }
  });

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {

        setInterval(() => { 
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                }))
            })
        }, 1000);

        const events = require('./db.json').events.map(e =>({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({events});
    };

    handleAddEvent = () => {
        this.props.navigation.navigate("form");
    };

    render() {
        return (                 
            [<FlatList
                key="flatlist"
                style={styles.list}
                data={this.state.events}
                renderItem={({item, separators}) => <EventCard event={item} /> }

                keyExtractor={item => item.id}
            />,
            <ActionButton 
                key="fab"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231,76,68,1)"
            />]
        );
    }
}

export default EventList;
