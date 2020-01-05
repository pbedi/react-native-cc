import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const cancelHandler = () => {
        props.onCancel();
    }

    return (
        <Modal visible={props.isAddModeFlag} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="Cancel" color="red" onPress={cancelHandler} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '75%',
        borderColor: '#888',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        padding: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },
    btn: {
        width: '40%'
    }
});

export default GoalInput;