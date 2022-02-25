import {StyleSheet} from 'react-native';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  image: {
    marginTop: spacing.grand,
    alignItems: 'center',
    justifyContent: 'center',
    height: 280,
    width: 280,
    borderRadius: radius.big,
    marginLeft: spacing.description_spacing,
  },
});
