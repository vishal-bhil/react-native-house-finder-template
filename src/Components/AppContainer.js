import React, {memo} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Color, Responsive} from '../Helper';

const AppContainer = props => {
  const {
    isTopSafeArea = true,
    isBottomSafeArea = true,
    isPadding = true,
    bottomStyle = {},
    children,
  } = props;
  const TopComponent = isTopSafeArea ? SafeAreaView : View;
  const BottomComponent = isBottomSafeArea ? SafeAreaView : View;
  return (
    <View style={styles.container}>
      <TopComponent />
      <View style={[styles.container, isPadding && styles.padding]}>
        {children}
      </View>
      <BottomComponent style={bottomStyle} />
    </View>
  );
};

export default memo(AppContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: 5,
  },
  padding: {
    paddingHorizontal: Responsive.widthPx(5),
  },
});
