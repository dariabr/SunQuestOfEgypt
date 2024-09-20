import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 31,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#1a0901',
  },
  icon: {
    height: 82.16,
    width: 82.16,
  },
  sunIcon: {
    width: 120,
    height: 120,

    alignSelf: 'center',
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,

    marginTop: 24,
  },
  descriptionView: {
    flexShrink: 1,
  },
  image: {
    width: 184,
    height: 184,
    alignItems: 'center',
  },
  questTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 500,
    marginBottom: 8,
  },
  questDescription: {
    color: 'white',
    flexShrink: 1,
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 400,
    marginBottom: 16,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
    gap: 14,
  },
});
