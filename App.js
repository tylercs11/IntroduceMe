import React from 'react';
import { Alert, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
        <Text>Hello {this.props.name}!</Text>
    );
  }
}

function createUser(fName, lName, pw, email, phone, orgCode){
  fetch('http://192.168.1.115:3000/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fName: fName,
      lName: lName,
      pw: pw,
      email: email,
      phone: phone,
      orgCode: orgCode,
      sched: "0000000"
    })
  }).then(res => res.json())
  .catch(error => console.error("Error:", error))
  .then(response => console.log("Server Response:", response));
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
    this._onPressButton = this._onPressButton.bind(this);
  }  
  _onPressButton() {
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
  
  
  render() {
    return (
    <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize:30}}>Welcome to IntroduceMe</Text>
          </View>
          <View style={styles.inputs}>
            <TextInput
                style={styles.textBox}
                placeholder="First Name"
                placeholderTextColor="#575250"
                autoCapitalize="words"
                onChangeText={(fname) => this.setState({fname})}
                value={this.state.fname}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Last Name"
                placeholderTextColor="#575250"
                autoCapitalize="words"
                onChangeText={(lname) => this.setState({lname})}
                lname={this.state.lname}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Password"
                placeholderTextColor="#575250"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                password={this.state.password}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Email"
                placeholderTextColor="#575250"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
                email={this.state.email}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Phone Number"
                placeholderTextColor="#575250"
                keyboardType="numeric"
                onChangeText={(number) => this.setState({number})}
                number={this.state.number}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Org Code"
                placeholderTextColor="#575250"
                autoCapitalize="none"
                onChangeText={(code) => this.setState({code})}
                code={this.state.code}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="Next"
                />
             </View>
          </View>
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
