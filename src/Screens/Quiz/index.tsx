import React, {useCallback, useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import data from '../../models/Quiz2Data';
import {closeIcon, coinStoneIcon} from '../../assets';

import styles from './styles';
import {ButtonSolid, Option, OptionType} from '../../components';
import {CONTINUE, NEXT} from '../../const';

//type WelcomeProps = NativeStackScreenProps<LoginStackParamList, 'Welcome'>;

//TODO TYPES
export const Quiz = ({navigation}: any) => {
  const allQuestions = data;
  /*
    {
    question: '1. What is the largest desert in the world by area?',
    options: ['Sahara', 'Atacama', 'Gobi', 'Antarctic desert'],
    optionsLetter: ['A', 'B', 'C', 'D'],
    correct_option: 'Antarctic desert', //fix _ name
  },
  */

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionsArray, setOptionsArray] = useState<OptionType[]>(
    allQuestions[currentQuestionIndex]?.options?.map(
      (el: string, idx: number) => ({
        title: el,
        selected: false,
        symbol: allQuestions[currentQuestionIndex]?.optionsLetter[idx],
      }),
    ),
  );
  const [rightAnswer, setRightAnswer] = useState<string>(
    allQuestions[currentQuestionIndex]?.correct_option,
  );

  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [rightAnswerCount, setRightAnswerCount] = useState(0);

  useEffect(() => {
    setRightAnswer(allQuestions[currentQuestionIndex]?.correct_option);
    setOptionsArray(
      allQuestions[currentQuestionIndex]?.options?.map(
        (el: string, idx: number) => ({
          title: el,
          selected: false,
          symbol: allQuestions[currentQuestionIndex]?.optionsLetter[idx],
        }),
      ),
    );
  }, [allQuestions, currentQuestionIndex]);

  console.log('!!!!!!!!_____', optionsArray);

  const handleNext = () => {
    //TODO navigate
    if (currentQuestionIndex === allQuestions.length - 1) {
      navigation.navigate('questComplete', {
        score: score,
        rightAnswerCount: rightAnswerCount,
      });
    }

    // let correct_answer = allQuestions[currentQuestionIndex].correct_answer;
    // if (user_answer === rightAnswer) {
    if (selectedOption === rightAnswer) {
      setScore(score + 150);
      setRightAnswerCount(rightAnswerCount + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onOptionPress = useCallback(
    (option: OptionType) => {
      console.log('ON OPT PRESS ');
      const updatedOptions = optionsArray?.map(opt => {
        if (opt.title === option.title) {
          return {...opt, selected: true};
        }

        return {...opt, selected: false};
      });
      console.log('~~~~~~~~~~', updatedOptions);
      setOptionsArray(updatedOptions);

      setSelectedOption(option?.title);
    },
    [optionsArray],
  );

  //TODO score into reducer
  //TODO TIMER

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerView}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={coinStoneIcon}
        />
        <Image style={styles.image} resizeMode="contain" source={closeIcon} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.timerView}>
          <Text style={styles.quizText}>Quiz</Text>
          <Text style={styles.quizText}>left time</Text>
        </View>
        <View style={styles.lineStyle} />
        <Text style={styles.questionText}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
        <View style={styles.optionsView}>
          {optionsArray?.map(el => (
            <Option key={el.title} onPress={onOptionPress} option={el} />
          ))}
        </View>

        <View style={styles.nextButtonWrap}>
          <ButtonSolid
            title={currentQuestionIndex < 4 ? NEXT : CONTINUE}
            onPress={handleNext}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
