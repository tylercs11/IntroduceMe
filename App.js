import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
        <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "placeholder"};
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
                placeholder="Username"
                placeholderTextColor="#575250" /*dark grey*/
                onSubmitEditing={(text) => this.setState({text})}
                username={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Password"
                placeholderTextColor="#575250"
                onSubmitEditing={(text) => this.setState({text})}
                password={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="First Name"
                placeholderTextColor="#575250"
                onSubmitEditing={(text) => this.setState({text})}
                fname={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Last Name"
                placeholderTextColor="#575250"
                onSubmitEditing={(text) => this.setState({text})}
                lname={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Email"
                placeholderTextColor="#575250"
                onSubmitEditing={(text) => this.setState({text})}
                email={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Phone Number"
                placeholderTextColor="#575250"
                onSubmitEditing={(text) => this.setState({text})}
                number={this.state.text}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Org Code"
                placeholderTextColor="#575250"
                onSubmitEditing={(text) => this.setState({text})}
                code={this.state.text}
            />
          </View>
          <View style={{flex: 1, backgroundColor: 'steelblue'}} />
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
    flex: 12,
    backgroundColor: 'skyblue',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
  },
  textBox: {
    height: 80,
  },
});
