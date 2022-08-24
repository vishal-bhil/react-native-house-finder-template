import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AppText} from '../../../Components';
import {Responsive, Color} from '../../../Helper';

const PropertyItem = props => {
  const {item, index} = props;
  const isEven = index % 2 === 0;
  return (
    <TouchableOpacity style={styles.container(isEven)}>
      <AppText
        text={item.name}
        fontColor={Color.black}
        fontSize="14"
        fontWeight="600"
        containerStyle={styles.propertyName}
      />
      <Image source={{uri: item.image}} style={styles.propertyImage} />
    </TouchableOpacity>
  );
};

export default memo(PropertyItem);

const styles = StyleSheet.create({
  container: isEven => ({
    flex: 0.5,
    backgroundColor: Color.greyFB,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: isEven ? Responsive.widthPx(5) : 0,
    overflow: 'hidden',
  }),
  propertyImage: {
    width: '50%',
    height: Responsive.widthPx(15),
  },
  propertyName: {
    flex: 1,
    textAlign: 'center',
  },
});
