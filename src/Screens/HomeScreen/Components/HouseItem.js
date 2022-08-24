import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppText} from '../../../Components';
import {Responsive, Color} from '../../../Helper';

const HouseItem = props => {
  const {item, index} = props;
  const isEven = index % 2 === 0;
  return (
    <TouchableOpacity style={styles.container(isEven)}>
      <Image source={{uri: item.image}} style={styles.propertyImage} />
      <View style={styles.cardContainer}>
        <AppText
          text={item.name}
          fontColor={Color.black}
          fontSize="14"
          fontWeight="600"
          numberOfLines={1}
        />
        <View style={styles.addressContainer}>
          <Icon name="location-on" size={20} color={Color.yellow1F} />
          <AppText
            text={'1739 Old Bayshore Hwy'}
            fontColor={Color.greyA0}
            fontSize="10"
            fontWeight="600"
            numberOfLines={1}
          />
        </View>
        <AppText
          text={'4 Beds · 2 Baths · 3,759 Ft ff'}
          fontColor={Color.black}
          fontSize="12"
          fontWeight="600"
          numberOfLines={1}
          containerStyle={{marginTop: 5}}
        />
        <View style={styles.priceContainer}>
          <AppText
            text={'$2200 /'}
            fontColor={Color.black}
            fontSize="14"
            fontWeight="600"
            numberOfLines={1}
          />
          <AppText
            text={' month'}
            fontColor={Color.greyA0}
            fontSize="12"
            fontWeight="400"
            numberOfLines={1}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(HouseItem);

const styles = StyleSheet.create({
  container: isEven => ({
    overflow: 'hidden',
    flexDirection: isEven ? 'row' : 'row-reverse',
    marginStart: Responsive.widthPx(5),
  }),
  propertyImage: {
    width: Responsive.widthPx(45),
    height: Responsive.widthPx(60),
    borderRadius: 10,
  },
  cardContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    end: 0,
    width: Responsive.widthPx(50),
    marginEnd: Responsive.widthPx(5),
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
