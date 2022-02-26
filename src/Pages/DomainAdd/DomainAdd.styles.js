import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: spacing.small,
  },

  innerContainer: {
    flexDirection: 'row',
  },
  datePickerContainer: {
    marginTop: spacing.tiny,
    backgroundColor: colors.secondary,
    padding: spacing.small,
    borderRadius: radius.sharp,
    borderColor: colors.black,
    width: 350,
  },
  label: {
    fontWeight: 'bold',
    color: colors.black,
  },
});
