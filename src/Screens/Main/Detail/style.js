import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    appHeading: {
      alignSelf: 'center',
      textAlign: 'center',
      color: theme.color.primaryButton,
      fontFamily: theme.family.bold,
    },

    headingText: {
      marginVertical: hp(1),
      fontSize: theme.size.xLarge,
      width: wp(80),
    },

    containerIcon: {
      borderRadius: theme.borders.radius5,
      alignItems: 'center',
      justifyContent: 'center',
      width: wp(17),
    },

    icon: {
      color: theme.color.primaryButton,
      size: wp(12),
    },
    textStyle: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.medium,
      color: 'black',
    },

    Button: {
      width: wp(92),
    },
    containerButton: {
      backgroundColor: theme.color.primaryIcon,
      borderRadius: 50,
      width: wp(16),
      height: wp(16),
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      marginTop: hp(76),
      marginLeft: wp(74),
    },

    activity: {
      color: theme.color.secondaryText,
    },
  });
  return styles;
};
export default createStyles;
