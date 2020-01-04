import React, {useState} from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input: {
        width: '75%',
        borderColor: '#888',
        borderWidth: 1,
        marginRight: 5,
        borderRadius: 5,
        padding: 10
      },
});

export default GoalInput;