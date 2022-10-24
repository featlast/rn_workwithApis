import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NewsLists from './src/components/NewsLists';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Welcome APP</Text>
      <NewsLists />
    </View>
  );
};

export default App;

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
