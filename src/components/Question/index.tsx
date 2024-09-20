import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';
import {coinIcon} from '../../assets';

interface QuestionProps {
  text: string;
  currQuestionIndex?: number;
  questionsCount?: number;
}

export const Question = ({
  text,
  questionsCount,
  currQuestionIndex,
}: QuestionProps) => {
  return (
    <View style={styles.questionView}>
      <Text style={styles.questionText}>{text}</Text>
      <View style={styles.questionsScore}>
        <View style={styles.coinsView}>
          <Image
            style={styles.smallCoin}
            source={coinIcon}
            resizeMode="contain"
          />
          <Text style={styles.coinsBonusText}>+150</Text>
        </View>
        <View style={styles.questionsInd}>
          <Text style={styles.currQuestionInd}>{currQuestionIndex}</Text>
          <Text style={styles.questionsCount}>{'/' + questionsCount}</Text>
        </View>
      </View>
    </View>
  );
};
