import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.itemValue}</Text>
      </View>
    </TouchableOpacity>
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