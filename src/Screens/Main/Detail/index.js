import {TouchableOpacity} from 'react-native';
import React from 'react';
import ScrollContainer from '../../../components/ScrollContainer';
import RnText from '../../../components/RnText';
import {useThemeAwareObject} from '../../../theme';
import createStyles from './style';
import Header from '../../../components/CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function Detail(props) {
  const recipe = props.route.params;

  const navigation = useNavigation();

  const styles = useThemeAwareObject(createStyles);

  return (
    <ScrollContainer
      topBar={
        <Header
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="arrow-back-circle"
                color={styles.icon.color}
                size={styles.icon.size}
              />
            </TouchableOpacity>
          }
          centerComponent={
            <RnText style={[styles.appHeading, styles.headingText]}>
              Recipe
            </RnText>
          }
        />
      }>
      <RnText style={styles.textStyle}>{recipe.recipe}</RnText>
    </ScrollContainer>
  );
}
