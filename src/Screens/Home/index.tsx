import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

import {ButtonSolid} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {
  ANCIENT_EGYPT_QUEST,
  ANCIENT_EGYPT_QUEST_DESC,
  VIEW_COLLECTION,
} from '../../const';
import {
  game1Logo,
  sunLogo,
  game2Logo,
  game3Logo,
  game4Logo,
} from '../../assets';
import styles from './styles';
import {StartButton} from '../../components/StartButton';

//type WelcomeProps = NativeStackScreenProps<LoginStackParamList, 'StartPage'>;

//TODO TYPES
//!!!!!!!!!!!!!!!!
export const HomeScreen = ({navigation}: any) => {
  //let counter = 0; TODO COUNTER PROP IN HEADER
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          {/* <Header /> */}
          <LinearGradient style={styles.card} colors={['#EB1800', '#FD6D0A']}>
            <View style={styles.descriptionView}>
              <Text style={styles.questTitle}>{ANCIENT_EGYPT_QUEST}</Text>
              <Text style={styles.questDescription}>
                {ANCIENT_EGYPT_QUEST_DESC}
              </Text>
              <ButtonSolid title={VIEW_COLLECTION} />
            </View>
            <Image
              style={styles.sunIcon}
              source={sunLogo}
              resizeMode="contain"
            />
          </LinearGradient>
          <ScrollView horizontal={true} contentContainerStyle={styles.row}>
            <StartButton
              source={game1Logo}
              onPress={() => navigation.navigate('Quest')}
            />
            <StartButton source={game2Logo} onPress={() => {}} />
          </ScrollView>
          <ScrollView horizontal={true} contentContainerStyle={styles.row}>
            <StartButton source={game3Logo} onPress={() => {}} />
            <StartButton source={game4Logo} onPress={() => {}} />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
