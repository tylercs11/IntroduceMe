import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      /*<View style={styles.container}>
        <Text>Welcome to IntroduceMe</Text>*/
        <Text>Hello {this.props.name}!</Text>
        /*<Image source={pic} style={{width: 193, height: 110}}/>
      </View>*/
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={[styles.container, {backgroundColor: 'powderblue'}]}>
        <Text style={{fontSize:30}}>Welcome to IntroduceMe</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Craig' />
        <Greeting name='Tanner' />
        <Greeting name='Yaqi' />
        <Greeting name='Tyler' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
