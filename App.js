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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "placeholder"};
  }  
  _onPressButton() {
    Alert.alert('You tapped the button!')
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
                onSubmitEditing={(text) => this.setState({text})}
                fname={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Last Name"
                placeholderTextColor="#575250"
                autoCapitalize="words"
                onSubmitEditing={(text) => this.setState({text})}
                lname={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Password"
                placeholderTextColor="#575250"
                autoCapitalize="none"
                secureTextEntry={true}
                onSubmitEditing={(text) => this.setState({text})}
                password={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Email"
                placeholderTextColor="#575250"
                keyboardType="email-address"
                autoCapitalize="none"
                onSubmitEditing={(text) => this.setState({text})}
                email={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Phone Number"
                placeholderTextColor="#575250"
                keyboardType="numeric"
                onSubmitEditing={(text) => this.setState({text})}
                number={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Org Code"
                placeholderTextColor="#575250"
                autoCapitalize="none"
                onSubmitEditing={(text) => this.setState({text})}
                code={this.state.text}
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
