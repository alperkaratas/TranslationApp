import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Animated,
  Easing,
  Alert,
} from 'react-native';
import {Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import auth, {firebase} from '@react-native-firebase/auth';

class Login extends React.Component {
  state = {
    email: '',
  };
  state = {
    pass: '',
  };
  state = {
    loading: false,
  };
  _onChangeMail = text => {
    this.setState({
      email: text,
    });
  };
  _onChangePass = text => {
    this.setState({
      pass: text,
    });
  };
  constructor(props) {
    super(props);
    this.secondTextInputRef = React.createRef();
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
  onButtonPress() {
    const {email, pass} = this.state;
    this.setState({error: '', loading: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  onLoginFail() {
    this.setState({error: 'Authentication Failed', loading: false});
    Alert.alert('Email or password is incorrect. Try again or register !');
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      pass: '',
      loading: false,
      error: '',
    });
    this.props.navigation.navigate('welcome');
  }

  render() {
    const {email} = this.state;
    const {pass} = this.state;
    const {navigate} = this.props.navigation;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <SafeAreaView style={styles.container}>
        <Animated.Image
          style={[styles.image1, {transform: [{rotate: spin}]}]}
          source={require('../assets/logo1.png')}
        />
        <Image style={styles.image4} source={require('../assets/logo4.png')} />
        <KeyboardAvoidingView behavior={'position'}>
          <TextInput
            returnKeyType="next"
            onSubmitEditing={() => {
              this.secondTextInputRef.current.focus();
            }}
            keyboardType="email-address"
            style={styles.myInput}
            value={email}
            placeholder="Email.."
            onChangeText={this._onChangeMail}
          />
          <TextInput
            ref={this.secondTextInputRef}
            secureTextEntry={true}
            style={styles.myInput}
            value={pass}
            placeholder="Password.."
            onChangeText={this._onChangePass}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={this.onButtonPress.bind(this)}
          disabled={!(this.state.email && this.state.pass)}>
          <View style={styles.butonContainer}>
            <Text style={styles.butonTitle}>Login</Text>
          </View>
        </TouchableOpacity>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 10,
            color: 'grey',
            marginTop: 15,
          }}>
          Dont have an account?
        </Text>
        <TouchableOpacity onPress={() => navigate('signup')}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 100,
              height: 70,
              color: '#FF3027',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              elevation: 4,
              zIndex: 10,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image1: {
    width: 150,
    height: 150,
    margin: -20,
  },
  image4: {
    width: 250,
    height: 25,
    margin: 40,
  },
  butonTitle: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
  butonContainer: {
    backgroundColor: '#FF3027',
    borderRadius: 25,
    height: 40,
    width: 250,
    justifyContent: 'center',
    margin: 30,
    elevation: 3,
  },
  myInput: {
    flexDirection: 'column',
    width: 250,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#fff',
    marginVertical: 5,
    paddingLeft: 18,
    zIndex: 10,
    borderBottomColor: '#FF3027',
  },
});
export default withNavigation(Login);
