import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NewsLists from '../components/NewsLists';

const NewsScreens = () => {
  return (
    <View style={styles.container}>
      <NewsLists />
    </View>
  );
};

export default NewsScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});
