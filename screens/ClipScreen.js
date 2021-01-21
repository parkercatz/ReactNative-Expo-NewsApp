import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClipScreen = (props) => (
  <View style={styles.container}>
    <Text>ClipScreen</Text>
  </View>
);
export default ClipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
