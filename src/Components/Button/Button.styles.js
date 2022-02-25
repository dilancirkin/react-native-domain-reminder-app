import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import colors from '../../styles/colors';

export default {
  default: StyleSheet.create({
    container: {
      margin: spacing.small,
      backgroundColor: colors.primary,
      padding: spacing.large,
      borderRadius: radius.smooth,
      alignItems: 'center',
    },
    label: {
      fontWeight: 'bold',
      color: 'white',
    },
  }),
  outline: StyleSheet.create({
    container: {
      borderWidth: 1,
      margin: spacing.small,
      borderColor: colors.primary,
      padding: spacing.large,
      alignItems: 'center',
      borderRadius: radius.smooth,
    },
    label: {
      fontWeight: 'bold',
      color: colors.primary,
    },
  }),

  circle: StyleSheet.create({
    container: {
      marginTop: 20,
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: colors.primary,
    },
    label: {
      fontWeight: 'bold',
      color: colors.black,
      marginBottom: spacing.small,
    },
  }),
};
