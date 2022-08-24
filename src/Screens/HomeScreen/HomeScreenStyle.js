import {StyleSheet} from 'react-native';
import {Responsive, Color, Fonts} from '../../Helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Responsive.widthPx(5),
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Color.greyFB,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameContainer: {
    marginStart: 10,
  },
  profileImage: {
    height: Responsive.widthPx(13),
    width: Responsive.widthPx(13),
    borderRadius: Responsive.widthPx(13),
  },
  sweetHomeText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: Responsive.widthPx(5),
  },
  searchContainer: {
    backgroundColor: Color.greyFB,
    marginTop: 30,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Responsive.widthPx(5),
    borderRadius: 10,
  },
  searchInputStyle: {
    marginStart: 10,
    fontFamily: Fonts.Nunito_Regular,
    fontSize: Responsive.font(4),
    flexGrow: 1,
    flex: 1,
  },
  propertyList: {
    marginHorizontal: Responsive.widthPx(5),
    marginTop: 30,
  },
  houseList: {
    marginTop: 30,
  },
  itemSeparator: {
    marginTop: Responsive.widthPx(5),
  },
});
