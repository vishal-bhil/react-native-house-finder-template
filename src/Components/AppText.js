import React, {memo} from 'react';
import {Text, Platform} from 'react-native';
import {Responsive, Color, Fonts} from '../Helper';
import PropTypes from 'prop-types';

const AppText = (props: AppTextProps) => {
  const {fontWeight, fontSize, fontColor, containerStyle, text} = props;

  var platformFont = Fonts.Nunito_Regular;
  if (Platform.OS === 'android' && fontWeight === '600') {
    platformFont = Fonts.Nunito_SemiBold;
  }

  return (
    <Text
      style={[
        {
          fontFamily: platformFont,
          fontSize:
            fontSize === '8'
              ? Responsive.font(2.5)
              : fontSize === '10'
              ? Responsive.font(3)
              : fontSize === '12'
              ? Responsive.font(3.5)
              : fontSize === '14'
              ? Responsive.font(4)
              : fontSize === '16'
              ? Responsive.font(4.5)
              : Responsive.font(fontSize),
          fontWeight: fontWeight || '400',
          color: fontColor || Color.black,
        },
        containerStyle,
      ]}
      {...props}>
      {text}
    </Text>
  );
};

interface AppTextProps {
  fontWeight: '400' | '600';
  fontSize: '8' | '10' | '12' | '14' | '16';
}

AppText.propTypes = {
  fontColor: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
};

export default memo(AppText);
