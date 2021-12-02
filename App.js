import React from 'react';
import {View, StyleSheet} from 'react-native';
import Round8Table from './TableComponent/Round8Table';
import Round4Table from './TableComponent/Round4Table';

export default function App() {
  return (
    <View style={styles.container}>
      <Round8Table />
      <Round4Table />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
