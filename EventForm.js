import React from "react";
import {View, Text, TouchableHighlight, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import {formatDateTime} from "./api";

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#fff"
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    button: {
        height: 50,
        backgroundColor: "#4bbbec",
        borderColor: "#4bbbec",
        alignSelf: "stretch",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }, 
    buttonText: {
        color: "#fff",
        fontSize: 18

    },
    borderTop: {
        borderColor: "#edeeef",
        borderTopWidth: 30
    }
});

class EventForm extends React.Component{

    state = {
        title: "",
        showDatePicker: false,
        date: null
    }

    handleAddPress = () => {
        console.log(this.state);
        this.props.navigation.goBack();
    };

    handleChangeTitle = (value) => {
        this.setState({title: value}); 
    };

    handleDatePress = (value) => {
        this.setState({ showDatePicker: true}); 
    };

    handleDatePicked = (date) => {
        this.setState({date});
        this.handleDatePickerHide(); 
    };

    handleDatePickerHide = () => {
        this.setState({ showDatePicker: false})
    }; 

    handleDatePress = () => {
        this.setState({ showDatePicker: true}); 
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        style={styles.text} 
                        placeholder="Event Title"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}
                    />
                    <TextInput 
                        style={[styles.text, styles.borderTop]}
                        placeholder="Event Date"
                        spellCheck={false}
                        value={formatDateTime(this.state.date != null ? this.state.date.toString(): "")}
                        editable={!this.state.showDatePicker}
                        onFocus={this.handleDatePress}
                    />
                    <DateTimePicker
                        isVisible={this.state.showDatePicker}
                        mode="datetime"
                        onConfirm={this.handleDatePicked}
                        onCancel={this.handleDatePickerHide}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.handleAddPress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>

        );
    }
}

export default EventForm;
