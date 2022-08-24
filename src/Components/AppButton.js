import React, {memo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Responsive, Color, Fonts} from '../Helper';

const AppButton = props => {
  const {text, onPress, containerStyle, textStyle, disable} = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        disable && styles.disableButton,
        containerStyle,
      ]}
      isDisable={disable}
      onPress={() => (onPress ? onPress() : {})}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(AppButton);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.orange00,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  disableButton: {
    backgroundColor: Color.grayShadeB9,
  },
  textStyle: {
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(4),
    color: Color.white,
    fontWeight: '600',
  },
});
