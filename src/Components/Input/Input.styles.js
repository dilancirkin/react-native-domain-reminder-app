import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: spacing.small,
  },
  input_container: {
    marginTop: spacing.tiny,
    backgroundColor: colors.secondary,
    padding: spacing.small,
    borderRadius: radius.sharp,
    borderColor: colors.black,
  },
  label: {
    fontWeight: 'bold',
    color: colors.black,
  },
});
