import React from 'react';
import { Alert, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';
import UserForm from './containers/UserForm'

class Greeting extends React.Component {
  render() {
    return (
        <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "placeholder",
                    fname: "",
                    lname: "",
                    password: "",
                    email: "",
                    number: "",
                    code: ""
                    };
  }  
  
  render() {
    return (
    <View style={styles.container}>
          <UserForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputs: {
    flex: 8,
    backgroundColor: 'skyblue',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
  },
  textBox: {
    height: 80,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  }
});
