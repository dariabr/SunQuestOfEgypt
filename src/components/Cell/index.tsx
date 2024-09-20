import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export const Cell = () => {
  return (
    <View style={styles.cellContainer}>
      <Text style={styles.cellTxt}>_</Text>
    </View>
  );
};
