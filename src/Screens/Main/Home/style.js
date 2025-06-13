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

    icon: {
      hight: wp(6),
      color: theme.color.primaryText,
      size: wp(9),
      delColor: theme.color.errorText,
    },
    input: {
      fontSize: theme.size.medium,
      fontFamily: theme.family.medium,
      alignSelf: 'center',
    },
    containerStyle: {
      flex: 1,
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
      bottom: 0,
      marginBottom: hp(7),
      marginLeft: wp(77),
    },

    text: {
      fontSize: theme.size.large,
      fontFamily: theme.family.bold,
    },

    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.primaryText,
    },
    activity: {
      color: theme.color.secondaryText,
    },
    removeButton: {
      backgroundColor: theme.color.primaryIcon,
      marginBottom: hp(2),
      width: wp(12),
      height: wp(12),
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerFieldArray: {
      flexDirection: 'row',
      width: wp(82),
    },
  });
  return styles;
};
export default createStyles;
