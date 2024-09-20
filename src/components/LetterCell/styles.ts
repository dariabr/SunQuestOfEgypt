import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cellContainer: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  cellTxt: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cellContainerEmpty: {
    backgroundColor: 'rgba(65, 21, 0, 1)',
  },
});
