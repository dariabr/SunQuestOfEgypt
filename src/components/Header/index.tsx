import React from 'react';
import {Image, Text, View} from 'react-native';
import {logoIcon, coinIcon} from '../../assets';
import styles from './styles';

interface HeaderProps {
  score: number;
}

export const Header = ({score}: HeaderProps) => {
  return (
    <View style={styles.scoreView}>
      <Image style={styles.icon} source={logoIcon} resizeMode="contain" />
      <View style={styles.scoreContainer}>
        <View style={styles.score}>
          <Text style={styles.scoreText}>{score}</Text>
          <Image style={styles.coinImage} source={coinIcon} />
        </View>
      </View>
    </View>
  );
};
