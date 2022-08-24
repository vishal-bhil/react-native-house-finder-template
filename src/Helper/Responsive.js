import {Dimensions, StatusBar, Platform} from 'react-native';

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    W_HEIGHT === 780 ||
    W_WIDTH === 780 ||
    W_HEIGHT === 812 ||
    W_WIDTH === 812 ||
    W_HEIGHT === 844 ||
    W_WIDTH === 844 ||
    W_HEIGHT === 896 ||
    W_WIDTH === 896 ||
    W_HEIGHT === 926 ||
    W_WIDTH === 926;
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const widthPx = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return (screenWidth * elemWidth) / 100;
};

const heightPx = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return ((screenHeight - getStatusBarHeight().toFixed(0)) * elemHeight) / 100;
};

const font = fontValue => {
  const fontSize =
    typeof value === 'number' ? fontValue : parseFloat(fontValue);
  return (screenWidth * fontSize) / 100;
};

const getStatusBarHeight = () => {
  return Platform.select({
    ios: isIPhoneX ? 78 : 20,
    android: StatusBar.currentHeight > 24 ? 0 : StatusBar.currentHeight,
    default: 0,
  });
};

const listenOrientationChange = that => {
  Dimensions.addEventListener('change', newDimensions => {
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

const getCount = data => {
  let number = 0;
  let num = 0;
  if (data && data?.length) {
    num = data?.length;
    if (num % 2 === 0) {
      number = num;
    } else {
      number = num + 1;
    }
  }
  return number / 2;
};

const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

const isIPhoneXSeries = () => {
  return Platform.OS === 'android' ? 0 : isIPhoneX ? 34 : 0;
};

const isAndroidNotch =
  Platform.OS === 'android' ? StatusBar.currentHeight > 24 : false;

export default {
  widthPx,
  heightPx,
  isIPhoneXSeries,
  isIPhoneX,
  font,
  isAndroidNotch,
  getStatusBarHeight,
  listenOrientationChange,
  removeOrientationListener,
  getCount,
};
