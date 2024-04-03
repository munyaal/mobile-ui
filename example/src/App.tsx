import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@munyaal/mobile-ui';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
