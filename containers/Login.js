import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import verifyUser from '../helpers/verifyUser'

export default class Login extends Component {

  toSignUp = () => {
    this.props.navigation.navigate('UserForm');
  };

  login = () => {
    var userid = -1;
    //verifyUser(email,password)
    verifyUser("craig@email.com","password").then(response => {
      userid = response;

      if(!(userid > -1)){
        //failed Login
      } else{
        //successful login
        //reset the stack
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            //we navigate to matching with the param userid set so we know who logged in
            NavigationActions.navigate({ routeName: 'Matching',params: {userid: userid} }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }

    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Login Screen</Text>
        <Button onPress={this.login} title="Sucessful login"/>
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
