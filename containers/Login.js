import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Login extends Component {

  toSignUp = () => {
    this.props.navigation.navigate('UserForm');
  };

  toMatching = () => {
    this.props.navigation.navigate('Matching');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Login Screen</Text>
        <Button onPress={this.toMatching} title="Sucessful login"/>
        <Button onPress={this.toSignUp} title="Sign Up"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 10,
    }
});
