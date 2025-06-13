import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useThemeAwareObject} from '../../../theme';
import createStyles from './style';
import ScrollContainer from '../../../components/ScrollContainer';
import Header from '../../../components/CustomHeader';
import RnText from '../../../components/RnText';
import RnInput from '../../../components/RnInput';
import {Formik, FieldArray} from 'formik';
import * as yup from 'yup';
import RnButton from '../../../components/RnButton';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Snackbar from '../../../components/Snackbar';

export default function Home() {
  const styles = useThemeAwareObject(createStyles);

  const navigation = useNavigation();

  const CreateRecipe = yup.object().shape({
    recipes: yup.array().of(
      yup.object().shape({
        recipe: yup.string().required('Please enter recipe'),
      }),
    ),
  });

  return (
    <ScrollContainer
      topBar={
        <Header
          centerComponent={
            <RnText style={[styles.appHeading, styles.headingText]}>
              Home
            </RnText>
          }
        />
      }>
      <Formik
        initialValues={{
          recipes: [{recipe: ''}],
        }}
        validateOnMount={true}
        onSubmit={values => {
          // handleRecipe(values);
        }}
        validationSchema={CreateRecipe}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <FieldArray
              name="recipes"
              render={arrayHelpers => (
                <>
                  {values.recipes.map((recipe, index) => (
                    <View
                      style={[
                        index !== 0
                          ? styles.containerFieldArray
                          : styles.containerField,
                      ]}
                      key={index}>
                      <RnInput
                        inputStyle={styles.input}
                        onChangeText={handleChange(`recipes[${index}].recipe`)}
                        onBlur={handleBlur(`recipes[${index}].recipe`)}
                        value={recipe.recipe}
                        placeholder="Enter the recipe"
                        containerStyle={styles.containerStyle}
                        error={
                          errors.recipes &&
                          touched.recipes &&
                          errors.recipes[index] &&
                          touched.recipes[index] &&
                          errors.recipes[index].recipe
                        }
                      />
                      {values.recipes.length > 1 && index !== 0 && (
                        <TouchableOpacity
                          onPress={() => arrayHelpers.remove(index)}
                          style={[styles.removeButton]}>
                          <Icon
                            style={styles.icon}
                            name="minus"
                            size={styles.icon.hight}
                            color={styles.icon.color}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}

                  <TouchableOpacity
                    onPress={() => {
                      arrayHelpers.push({recipe: ''});
                    }}
                    style={styles.containerButton}>
                    <Icon
                      style={styles.icon}
                      name="plus"
                      size={styles.icon.size}
                      color={styles.icon.color}
                    />
                  </TouchableOpacity>
                </>
              )}
            />
            <RnButton
              title="Send"
              style={[styles.Button]}
              onPress={() => handleSubmit()}
            />
          </>
        )}
      </Formik>
    </ScrollContainer>
  );
}
