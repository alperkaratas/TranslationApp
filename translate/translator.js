import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from './header';
import EditText from './editText';
const key =
  'trnsl.1.1.20200418T155013Z.245649a4ef8a4ce7.6e4258f65bd1b0643782e5f14898eecf1daf12ad';

export default class translator extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      loading: false,
      goForRequest: false,
      translatedWord: '',
      language: 'tr',
    };
  }

  onWordChange = word => {
    this.setState({word});
  };

  translate = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      fetch(
        'https://translate.yandex.net/api/v1.5/tr.json/translate?key=' +
          key +
          '&lang=' +
          this.state.language +
          '&text=' +
          this.state.word,
      )
        .then(response => response.json())
        .then(responseJson => {
          var translatedWord = responseJson.text;
          this.setState({translatedWord, loading: false});
        })
        .catch(error => {
          this.setState({loading: false});
        });
    }, 300);
  };

  checkLoading = () => {
    if (!this.state.loading) {
      return (
        <View style={styles.translateViewStyle}>
          <Text style={styles.translatedWordHint}>Entered</Text>
          <Text style={styles.translatedWord}>{this.state.word}</Text>
          <Text style={styles.translatedWordHint}>Translated</Text>
          <Text style={styles.translatedWord}>{this.state.translatedWord}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.progressStyle}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: 18,
              color: '#FF3027',
              fontWeight: '500',
            }}>
            Translating...
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Let's Translate !" />
        <View style={styles.content}>
          <EditText onWordChange={this.onWordChange} />
          <View>
            <TouchableOpacity>
              <Image
                style={styles.voiceButton}
                source={require('../assets/voice.png')}
              />
            </TouchableOpacity>
          </View>

          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginTop: 10,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Choose Langulage to Translate :
          </Text>
          <Picker
            selectedValue={this.state.language}
            onValueChange={lang => this.setState({language: lang})}>
            <Picker.Item label="Turkish" value="tr" />
            <Picker.Item label="English" value="en" />
            <Picker.Item label="German" value="de" />
            <Picker.Item label="French" value="fr" />
            <Picker.Item label="Spanish" value="es" />
            <Picker.Item label="Russian" value="ru" />
            <Picker.Item label="Chineese" value="zh" />
            <Picker.Item label="Greek" value="el" />
            <Picker.Item label="Japanese" value="ja" />
            <Picker.Item label="Korean" value="ko" />
            <Picker.Item label="Portuguese" value="pt" />
            <Picker.Item label="Swedish" value="sv" />
            <Picker.Item label="Ukrainian" value="uk" />
          </Picker>
          <TouchableOpacity
            onPress={this.translate}
            disabled={
              // eslint-disable-next-line eqeqeq
              this.state.word.toString().trim().length == 0 ? true : false
            }>
            <View style={styles.butonContainer}>
              <Text style={styles.butonTitle}>Translate</Text>
            </View>
          </TouchableOpacity>
        </View>
        {this.checkLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  content: {
    margin: 12,
  },
  translateViewStyle: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  translatedWordHint: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12,
  },
  translatedWord: {
    fontSize: 20,
    color: '#FF3027',
    textAlign: 'center',
    fontWeight: 'bold',
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
    marginTop: 10,
    marginLeft: 40,
    elevation: 3,
  },
  progressStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  voiceButton: {
    marginLeft: 160,
    width: 25,
    height: 25,
    margin: 9,
  },
});
