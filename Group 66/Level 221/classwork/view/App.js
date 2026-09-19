import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App(){
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: "red" }]} />
    <View style={[styles.box, { backgroundColor: "green" }]} />
    <View style={[styles.box, { backgroundColor: "blue" }]} />
  </View>
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    flex: 1,
  },
});


