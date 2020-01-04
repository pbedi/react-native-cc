import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.itemValue}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    borderColor: '#888',
    borderWidth: 1
  },

})
export default GoalItem;