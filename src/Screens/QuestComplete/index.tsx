import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NEXT, YOUR_QUEST_RESULT, YOUR_GIFT} from '../../const';
import {bigCoinLogo, closeIcon, compassLogo} from '../../assets';
import styles from './styles';
//import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ButtonSolid} from '../../components/ButtonSolid';

//type WelcomeProps = NativeStackScreenProps<LoginStackParamList, 'Welcome'>;

interface QuestComplete {
  title: string;
}

//TODO TYPES
export const QuestComplete = ({navigation, route}: any) => {
  console.log('ROUTE PARAMS', route);
  const {rightAnswerCount, score} = route.params;

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]);

  const titleText =
    rightAnswerCount < 5
      ? YOUR_QUEST_RESULT + ' ' + rightAnswerCount + '/5'
      : YOUR_GIFT;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.closeView}
            onPress={() => navigation.push('HomeScreen')}>
            <Image source={closeIcon} style={styles.closeImage} />
          </TouchableOpacity>
          <Text style={styles.titleText}>{titleText}</Text>
          <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              source={rightAnswerCount < 5 ? bigCoinLogo : compassLogo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.descriptionText}>
            {rightAnswerCount < 5
              ? `You got ${score} coins, do you want to complete the quest again?`
              : `You received  ${score} coins and a compass as a gift`}
          </Text>
          <ButtonSolid
            title={NEXT}
            onPress={() => {
              //navigation.navigate('');//TODO
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
