import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppNavigator from './Router/AppNavigator';

function StartComponent() {
  return (
    <View style={styles.flexBox}>
      <AppNavigator />
    </View>
  );
}

export default StartComponent;

const styles = StyleSheet.create({
  flexBox: {flex: 1},
});
