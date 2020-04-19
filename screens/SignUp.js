import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {withNavigation} from 'react-navigation';
import BackButton from '../components/BackButton';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.twoTextInputRef = React.createRef();
    this.threeTextInputRef = React.createRef();
    this.fourTextInputRef = React.createRef();
    this.fiveTextInputRef = React.createRef();
    this.spinValue = new Animated.Value(0);
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin());
  }

  componentDidMount() {
    this.spin();
  }

  _handleSubmit = value => {
    setTimeout(() => {
      this.props.navigation.navigate('loading');
    }, 100);
  };

  render() {
    const {navigate} = this.props.navigation;
    const phoneRegExp = /^(5)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Formik
        initialValues={{email: '', pass: '', telno: '', ad: '', soyad: ''}}
        onSubmit={this._handleSubmit}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Please enter a valid email address')
            .required('This field is required'),
          pass: Yup.string()
            .min(6, 'Must be between 6 and 8 characters')
            .max(8, 'Must be between 6 and 8 characters')
            .required('This field is required'),
          telno: Yup.string()
            .matches(phoneRegExp, 'Please enter a valid phone number ')
            .required('This field is required'),
          ad: Yup.string()
            .max(20, 'Please enter a valid name')
            .required('This field is required'),
          soyad: Yup.string()
            .max(20, 'Please enter a valid surname')
            .required('This field is required'),
        })}>
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
          isValid,
        }) => (
          <ScrollView style={styles.container}>
            <BackButton goBack={() => navigate('login')} />
            <Animated.Image
              style={[styles.image, {transform: [{rotate: spin}]}]}
              source={require('../assets/logo3.png')}
            />
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                textAlign: 'center',
                marginTop: 2,
                fontSize: 15,
                color: '#f1f1f1',
                elevation: 2,
                zIndex: 5,
                fontWeight: '700',
              }}>
              Register and Translate !
            </Text>
            <View style={styles.singupContainer}>
              <TextInput
                error={errors.email && touched.email}
                style={styles.infoInputs}
                keyboardType="email-address"
                placeholder=" *  E-mail.."
                value={values.email}
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.twoTextInputRef.current.focus();
                }}
              />
              {errors.email && touched.email && (
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    fontSize: 10,
                    color: '#FF3027',
                    textAlign: 'center',
                  }}>
                  {errors.email}
                </Text>
              )}
              <TextInput
                error={errors.pass && touched.pass}
                ref={this.twoTextInputRef}
                style={styles.infoInputs}
                secureTextEntry={true}
                placeholder=" *  Password.. "
                value={values.pass}
                onBlur={() => setFieldTouched('pass')}
                autoCapitalize={'none'}
                onChangeText={handleChange('pass')}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.threeTextInputRef.current.focus();
                }}
              />
              {errors.pass && touched.pass && (
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    fontSize: 10,
                    color: '#FF3027',
                    textAlign: 'center',
                  }}>
                  {errors.pass}
                </Text>
              )}
              <TextInput
                error={errors.telno && touched.telno}
                ref={this.threeTextInputRef}
                style={styles.infoInputs}
                keyboardType="phone-pad"
                placeholder=" *  5xx-xxx-xxxx"
                value={values.telno}
                onBlur={() => setFieldTouched('telno')}
                autoCapitalize={'none'}
                onChangeText={handleChange('telno')}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.fourTextInputRef.current.focus();
                }}
              />
              {errors.telno && touched.telno && (
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    fontSize: 10,
                    color: '#FF3027',
                    textAlign: 'center',
                  }}>
                  {errors.telno}
                </Text>
              )}
              <TextInput
                error={errors.ad && touched.ad}
                ref={this.fourTextInputRef}
                style={styles.infoInputs}
                keyboardType="default"
                placeholder=" *  Name.."
                value={values.ad}
                onBlur={() => setFieldTouched('ad')}
                autoCapitalize={'words'}
                onChangeText={handleChange('ad')}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.fiveTextInputRef.current.focus();
                }}
              />
              {errors.ad && touched.ad && (
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    fontSize: 10,
                    color: '#FF3027',
                    textAlign: 'center',
                  }}>
                  {errors.ad}
                </Text>
              )}
              <TextInput
                error={errors.soyad && touched.soyad}
                ref={this.fiveTextInputRef}
                style={styles.infoInputs}
                keyboardType="default"
                placeholder=" *  Surname.."
                value={values.soyad}
                onBlur={() => setFieldTouched('soyad')}
                autoCapitalize={'words'}
                onChangeText={handleChange('soyad')}
              />
              {errors.soyad && touched.soyad && (
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    fontSize: 10,
                    color: '#FF3027',
                    textAlign: 'center',
                  }}>
                  {errors.soyad}
                </Text>
              )}

              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  textAlign: 'center',
                  margin: 15.5,
                  fontSize: 10,
                  marginTop: 16,
                  color: '#FF3027',
                  elevation: 10,
                  fontWeight: '700',
                }}>
                *Fill in all your information completely and accurately.
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.singupButtons}
                disabled={!isValid}
                onPress={handleSubmit}>
                <Text style={styles.butonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF3027',
    flex: 1,
  },
  singupContainer: {
    width: 300,
    height: 380,
    backgroundColor: '#f1f1f1',
    marginHorizontal: 32,
    marginVertical: 45,
    marginTop: 12,
    marginBottom: 80,
    borderRadius: 28,
    zIndex: 5,
    elevation: 2,
  },
  infoInputs: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 250,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: '#f1f1f1',
    borderBottomColor: '#FF3027',
    marginTop: 15,
    marginHorizontal: 28,
    marginVertical: -1,
    paddingLeft: 18,
    zIndex: 10,
  },
  singupButtons: {
    height: 40,
    width: 200,
    borderWidth: 1.5,
    borderColor: '#fff',
    borderRadius: 30,
    marginVertical: -70,
    marginHorizontal: 80,
  },
  butonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
    zIndex: 5,
    borderWidth: 1,
    borderColor: '#FF3027',
    borderRadius: 30,
    marginHorizontal: 155,
    marginVertical: 17,
  },
});

export default withNavigation(SignUp);
