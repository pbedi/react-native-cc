import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  const setIsAddModeHandler = () => {
    setIsAddMode(true);
  }

  const cancelIsAddModeHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={setIsAddModeHandler} />
      <GoalInput onAddGoal={addGoalHandler} isAddModeFlag={isAddMode} onCancel={cancelIsAddModeHandler} />
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} itemValue={itemData.item.value} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 52
  },
  
});
