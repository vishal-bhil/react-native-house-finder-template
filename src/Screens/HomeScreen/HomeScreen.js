import React from 'react';
import {View, FlatList, Image, TextInput} from 'react-native';
import {AppContainer, AppScrollView, AppText} from '../../Components';
import {Color} from '../../Helper';
import styles from './HomeScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropertyItem from './Components/PropertyItem';
import HouseItem from './Components/HouseItem';
import propertyList from '../../Assets/Data/propertyList.json';
import houseList from '../../Assets/Data/houseList.json';

const WelcomeScreen = ({}) => {
  const renderPropertyItem = ({item, index}) => {
    return <PropertyItem item={item} index={index} />;
  };
  const renderHouseItem = ({item, index}) => {
    return <HouseItem item={item} index={index} />;
  };

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <AppContainer isPadding={false}>
      <View style={styles.headerContainer}>
        <View style={styles.menuContainer}>
          <View style={styles.menuIconContainer}>
            <Icon name="grid-view" size={20} color={Color.greyA0} />
          </View>
          <View style={styles.userNameContainer}>
            <AppText
              text="welcome back"
              fontColor={Color.black}
              fontSize="10"
              fontWeight="400"
            />
            <AppText
              text="Vishal Bhil"
              fontColor={Color.black}
              fontSize="10"
              fontWeight="600"
            />
          </View>
        </View>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://billiardport.com/assets/pages/media/profile/profile_user.jpg',
          }}
        />
      </View>

      <AppScrollView>
        <View style={styles.sweetHomeText}>
          <AppText
            text="Find your Sweet"
            fontColor={Color.black}
            fontSize="16"
            fontWeight="400"
          />
          <AppText
            text=" House"
            fontColor={Color.black}
            fontSize="16"
            fontWeight="600"
          />
        </View>

        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color={Color.greyA0} />
          <TextInput placeholder="Search..." style={styles.searchInputStyle} />
        </View>

        <FlatList
          data={propertyList}
          renderItem={renderPropertyItem}
          ItemSeparatorComponent={renderItemSeparator}
          numColumns={2}
          style={styles.propertyList}
        />

        <FlatList
          data={houseList}
          renderItem={renderHouseItem}
          ItemSeparatorComponent={renderItemSeparator}
          style={styles.houseList}
        />
      </AppScrollView>
    </AppContainer>
  );
};
export default WelcomeScreen;
