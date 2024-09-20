import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import data from '../../models/QuizData';
import {ADVENTURE_QUEST, CONTINUE, NEXT} from '../../const';
import {ButtonSolid, Header, Question} from '../../components';
import {Cell} from '../../components/Cell';
import {LetterCell} from '../../components/LetterCell';
import styles from './styles';

//type WelcomeProps = NativeStackScreenProps<LoginStackParamList, 'Welcome'>;

//TODO TYPES
export const Quest = ({navigation}: any) => {
  const allQuestions = data;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerLetters, setAnswerLetters] = useState<string[]>([]);
  const [emptyCells, setEmptyCells] = useState(['', '', '', '', '']);
  const [selectLetterCount, setSelectLetterCount] = useState(0);
  const [rightAnswerCount, setRightAnswerCount] = useState(0);

  const [score, setScore] = useState(0);

  const [lettersArray, setLettersArray] = useState<string[]>([]);

  useEffect(() => {
    setEmptyCells([...Array(5).fill('')]);
    setLettersArray(allQuestions[currentQuestionIndex]?.options);
  }, [allQuestions, currentQuestionIndex]);

  //   console.log('____lettersArray', lettersArray);
  //   console.log('emptyCells', emptyCells);

  //   console.log('selectLetterCount', selectLetterCount);
  const onLetterPress = (letter: string, index: any) => {
    if (selectLetterCount >= 5) {
      return;
    }

    const lettersArrModified = lettersArray.map((el, ind) => {
      console.log('MOD', ind, index);
      if (ind === index) {
        return '';
      }
      return el;
    });
    setLettersArray(lettersArrModified);
    emptyCells.splice(selectLetterCount, 1, letter);
    setAnswerLetters([...answerLetters, letter]);
    setSelectLetterCount(selectLetterCount + 1);
  };

  const handleNext = () => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      navigation.navigate('questComplete', {
        score: score,
        rightAnswerCount: rightAnswerCount,
      });
    }
    const user_answer = answerLetters.join('').toLowerCase();
    let correct_answer = allQuestions[currentQuestionIndex].correct_answer;
    if (user_answer === correct_answer) {
      setScore(score + 150);
      setRightAnswerCount(rightAnswerCount + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswerLetters([]);
    setEmptyCells([...Array(5).fill('')]);
    setSelectLetterCount(0);
  };

  //TODO score into reducer
  console.log('THIS');
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header score={score} />
          <Text style={styles.title}>{ADVENTURE_QUEST}</Text>

          <Question
            text={allQuestions[currentQuestionIndex]?.question}
            currQuestionIndex={currentQuestionIndex + 1}
            questionsCount={allQuestions?.length}
          />

          <Text style={styles.answerTitle}>Make an answer out of letters</Text>
          <View style={styles.answerView}>
            {emptyCells.map((el, index) => {
              if (el === '') {
                return <Cell key={index} />;
              }
              return <LetterCell letter={el} key={index} />;
            })}
          </View>

          <View style={styles.lettersView}>
            {lettersArray?.map((el, index) => {
              return (
                <LetterCell
                  key={index}
                  onPress={() => onLetterPress(el, index)}
                  letter={el.toString()}
                />
              );
            })}
          </View>
          <View style={styles.nextButtonWrap}>
            <ButtonSolid
              title={currentQuestionIndex < 4 ? NEXT : CONTINUE}
              onPress={handleNext}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
