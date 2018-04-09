import React from 'react';
import UserForm from '../components/UserForm';
import {View, StyleSheet} from 'react-native'
import createUser from '../helpers/createUser';

export default class UserFormContainer extends React.Component {

  render(){

  function _onPressButton() {
      let fname = this.state.fname;
      let lname = this.state.lname;
      let password = this.state.password;
      let email = this.state.email;
      let number = this.state.number;
      let code = this.state.code;
      console.log("Passing in: "+fname+" "+lname+" "+password+" "+email+" "+number+" "+code)
      createUser(fname,lname,password,email,number,code);

      //Alert.alert('You tapped the button!')
    }

    return (
      <View style={styles.container}>
        <UserForm submit={_onPressButton}/>
      </View>
    )
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
  }
});
